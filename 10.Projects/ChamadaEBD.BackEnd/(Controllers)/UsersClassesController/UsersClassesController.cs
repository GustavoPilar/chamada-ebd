using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[Controller]")]
    public class UsersClassesController : CrudControllerBase<UsersClasses>
    {
        public UsersClassesController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        #region Actions

        /// <summary>
        /// Endpoint para pegar uma lista de UsersClasses pelo ClassId
        /// </summary>
        /// <param name="classId"></param>
        /// <returns>IEnumerable<UsersClasses></returns>
        [HttpGet("List/ClassId/{classId:long}")]
        public async Task<ActionResult<IEnumerable<UsersClasses>>> GetUsersByClassId(long classId)
        {
            if (classId < 0)
                return BadRequest("Id inválido");

            List<UsersClasses> entities = this.repository.GetQueryable().Where(x => x.ClassId == classId).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }


        /// <summary>
        /// Endpoint para pegar uma lista de UsersClasses pelo UserId
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>IEnumerable<UsersClasses></returns>
        [HttpGet("List/UsersId")]
        public async Task<ActionResult<IEnumerable<UsersClasses>>> GetClassesByUserId([FromQuery]long[] usersId)
        {
            if (usersId is null)
                return BadRequest("Id inválido");

            List<UsersClasses> entities = this.repository.GetQueryable().Where(x => usersId.Contains(x.UserId)).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }

        [HttpGet("Entity/Class/UserId/{userId:long}")]
        public async Task<ActionResult<IEnumerable<Class>>> GetClassByUserId(long userId)
        {
            if (userId < 0)
                return BadRequest("Id inválido");

            IQueryable<UsersClasses> querable = this.repository.GetQueryable();

            List<UsersClasses> entities = await querable.Where(x => x.UserId == userId).ToListAsync();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            UsersClasses? userClass = entities.FirstOrDefault();

            if (userClass is null)
                return NotFound("Entidade não encontrada");

            Class? @class = this._unitOfWork.GetRepository<Class>().GetEntityByIdAsync(userClass.ClassId).Result;

            if (@class is null)
                NotFound("Classe não encontrada");

            return Ok(@class);
        }
        #endregion
    }
}
