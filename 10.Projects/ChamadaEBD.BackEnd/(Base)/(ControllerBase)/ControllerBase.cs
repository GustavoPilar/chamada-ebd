using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;
using System.Text.Json;

namespace ChamadaEBD.BackEnd
{
    public abstract class CrudControllerBase<TEntity> : ControllerBase
        where TEntity : class, IEntityBase
    {
        #region Fields
        protected readonly IRepositoryBase<TEntity> repository;
        protected readonly IUnitOfWork _unitOfWork;
        #endregion

        #region Constructor
        public CrudControllerBase(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            repository = unitOfWork.GetRepository<TEntity>();
        }
        #endregion

        #region Actions :: Get(), GetById(), GetByIds(), Post(), PostRange(), Put(), PutRange(), Delete(), DeleteRange()

        #region Get()
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TEntity>>> Get()
        {
            IEnumerable<TEntity> entities = await repository.GetEntitiesAsync();

            if (entities is null)
            {
                return NotFound("Nenhuma entidade foi encontrada");
            }

            return Ok(entities.ToList());
        }
        #endregion

        #region GetById()
        [HttpGet("{id:long}")]
        public async Task<ActionResult<TEntity>> GetById(long id)
        {
            if (id < 0)
                return BadRequest("Id inválido");

            TEntity? entity = await repository.GetEntityByIdAsync(id);

            if (entity is null)
                return NotFound("Entidade não encontrada");

            return Ok(entity);
        }
        #endregion

        #region GetByIds()
        [HttpGet("EntitiesIds")]
        public async Task<ActionResult<TEntity>> GetByIds([FromQuery]long[] ids)
        {
            IEnumerable<TEntity> entities = await repository.GetEntitiesByIdsAsync(ids);

            if (entities is null)
                return NotFound("Entidade não encontrada");

            return Ok(entities);
        }
        #endregion

        #region Post()
        [HttpPost]
        public async Task<ActionResult<TEntity>> Post(TEntity entity)
        {
            if (entity is null)
                return BadRequest("Entidade inválida");

            TEntity newEntity = repository.Save(entity);
            await _unitOfWork.CommitAsync();

            return CreatedAtAction(nameof(GetById), new { id = newEntity.Id }, newEntity);
        }
        #endregion

        #region PostRange()
        [HttpPost("Range")]
        public virtual async Task<ActionResult<IEnumerable<TEntity>>> PostRange(IEnumerable<TEntity> entities)
        {
            if (entities is null)
                return BadRequest("Entidade inválida");

            IEnumerable<TEntity> entitiesToUpdate = entities.Where(x => x.Id > 0);
            IEnumerable<TEntity> entitiesToSave = entities.Where(x => x.Id == 0);
            List<TEntity> newEntities = new List<TEntity>();

            // Se tiver alguma entidade existente para atualizar
            if (entitiesToUpdate.Any())
                newEntities.AddRange(repository.UpdateRange(entitiesToUpdate).ToList());

            if (entitiesToSave.Any())
                newEntities.AddRange(repository.SaveRange(entitiesToSave).ToList());
            
            await _unitOfWork.CommitAsync();

            return Ok(newEntities);
        }
        #endregion

        #region Put()
        [HttpPut("{id:long}")]
        public async Task<ActionResult<TEntity>> Put(long id, TEntity entity)
        {
            if (id != entity.Id)
                return BadRequest("Id inválido");
        
            TEntity newEntity = repository.Update(entity);
            await _unitOfWork.CommitAsync();

            return Ok(newEntity);
        }
        #endregion

        #region PutRange()
        [HttpPut("Range")]
        public async Task<ActionResult<IEnumerable<TEntity>>> PutRange(IEnumerable<TEntity> entities)
        {
            if (entities is null)
                return BadRequest("Entidades inválidas");

            IEnumerable<TEntity> entitiesToSave = entities.Where(x => x.Id == 0);
            IEnumerable<TEntity> entitiesToUpdate = entities.Where(x => x.Id > 0);
            List<TEntity> entitiesUpdated = new List<TEntity>();

            // Se tiver alguma entidade nova, já salva
            if (entitiesToSave.Any())
                entitiesUpdated.AddRange(repository.SaveRange(entitiesToSave).ToList());

            if (entitiesToUpdate.Any())
                entitiesUpdated.AddRange(this.repository.UpdateRange(entities).ToList());

            await this._unitOfWork.CommitAsync();

            return Ok(entitiesUpdated);
        }
        #endregion

        #region Delete()
        [HttpDelete("{id:long}")]
        public async Task<ActionResult> Delete(long id, TEntity entity)
        {
            if (id != entity.Id)
                return BadRequest("Id inválido");

            repository.Delete(entity);
            await _unitOfWork.CommitAsync();

            return Ok(JsonSerializer.Serialize("Entidade deletada"));
        }
        #endregion

        #region DeleteRange()
        [HttpDelete("Range")]
        public async Task<ActionResult> Delete([FromBody]IEnumerable<TEntity> entities)
        {
            if (entities is null)
                return BadRequest("Entidades inválidas");

            repository.DeleteRange(entities);
            await _unitOfWork.CommitAsync();

            return Ok(JsonSerializer.Serialize("Entidade deletada"));
        }
        #endregion

        #endregion
    }
}
