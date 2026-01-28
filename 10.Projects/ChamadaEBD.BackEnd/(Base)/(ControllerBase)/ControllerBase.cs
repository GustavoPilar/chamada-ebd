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

        #region Actions
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

        [HttpGet("{id:long}")]
        public async Task<ActionResult<TEntity>> GetById(long id)
        {
            TEntity? entity = await repository.GetEntityByIdAsync(id);

            if (entity is null)
                return NotFound("Entidade não encontrada");

            return Ok(entity);
        }

        [HttpPost]
        public async Task<ActionResult<TEntity>> Post(TEntity entity)
        {
            if (entity is null)
                return BadRequest("Entidade inválida");

            TEntity newEntity = repository.Save(entity);
            await _unitOfWork.CommitAsync();

            return CreatedAtAction(nameof(GetById), new { id = newEntity.Id }, newEntity);
        }

        [HttpPut("{id:long}")]
        public async Task<ActionResult<TEntity>> Put(long id, TEntity entity)
        {
            if (id != entity.Id)
                return BadRequest("Id inválido");
        
            TEntity newEntity = repository.Update(entity);
            await _unitOfWork.CommitAsync();

            return Ok(newEntity);
        }

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

        #region NonAction

        #endregion
    }
}
