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
        /// Retorna uma lista de UsersClasses pelo ClassId
        /// </summary>
        /// <param name="classId">Id da classe</param>
        /// <returns>IEnumerable UsersClasses</returns>
        [HttpGet("List/ByClassesIds")]
        public async Task<ActionResult<IEnumerable<UsersClasses>>> GetUsersClassesByClassId([FromQuery]long[] classesIds)
        {
            if (classesIds is null)
                return BadRequest("Entidades inválidas");

            List<UsersClasses> entities = this.repository.GetQueryable().Where(x => classesIds.Contains(x.ClassId)).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }


        /// <summary>
        /// Retorna uma lista de UsersClasses pelos Ids dos usuários.
        /// </summary>
        /// <param name="usersId">Ids dos usuários</param>
        /// <returns>IEnumerable UsersClasses</returns>
        [HttpGet("List/ByUsersIds")]
        public async Task<ActionResult<IEnumerable<UsersClasses>>> GetUsersClassesByUsersIds([FromQuery]long[] usersId)
        {
            if (usersId is null)
                return BadRequest("Entidades inválidas");

            List<UsersClasses> entities = this.repository.GetQueryable().Where(x => usersId.Contains(x.UserId)).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }
        #endregion
    }
}
