using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[Controller]")]
    public class UserController : CrudControllerBase<User>
    {
        public UserController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        #region Actions

        /// <summary>
        /// Endpoint que retorna uma lista de usuário sem classes
        /// </summary>
        /// <returns></returns>
        [HttpGet("WithoutClass")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserWithoutClass()
        {
            List<long> usersIds = this._unitOfWork.GetRepository<UsersClasses>().GetQueryable().Select(x => x.UserId).ToList();

            IQueryable<User> queryable = this.repository.GetQueryable().Where(x => !usersIds.Contains(x.Id));

            List<User> users = queryable.ToList();

            if (users is null)
                return NotFound("Entidades não encontradas");

            return Ok(users);
        }

        [HttpGet("ByClassId/{classId:long}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserByClass(long classId)
        {
            long[] usersIds = this._unitOfWork.GetRepository<UsersClasses>().GetQueryable().Where(x => x.ClassId == classId).Select(x => x.UserId).ToList().ToArray();

            List<User> users =  this.repository.GetEntitiesByIdsAsync(usersIds).Result.ToList();

            if (users is null)
                return NotFound("Entidades não encontradas");

            return Ok(users);
        }

        [HttpGet("ByClassId/{classId:long}/{isTeacher:bool}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserByClassAndByIsTeacher(long classId, bool isTeacher)
        {
            long[] usersIds = this._unitOfWork.GetRepository<UsersClasses>().GetQueryable().Where(x => x.ClassId == classId && x.IsTeacher == isTeacher).Select(x => x.UserId).ToList().ToArray();

            List<User> users = this.repository.GetEntitiesByIdsAsync(usersIds).Result.ToList();

            if (users is null)
                return NotFound("Entidades não encontradas");

            return Ok(users);
        }
        #endregion
    }
}
