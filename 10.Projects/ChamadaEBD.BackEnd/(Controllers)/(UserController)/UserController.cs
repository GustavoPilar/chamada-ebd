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
        /// Retorna uma lista de usuário sem classes
        /// </summary>
        /// <returns>IEnumerable Users</returns>
        [HttpGet("List/WithoutClass")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsersWithoutClass()
        {
            long[] usersIds = this._unitOfWork.GetRepository<UsersClasses>().GetQueryable().Select(x => x.UserId).ToArray();

            List<User> users = this.repository.GetQueryable().Where(x => !usersIds.Contains(x.Id)).ToList();

            if (users is null)
                return NotFound("Entidades não encontradas");

            return Ok(users);
        }

        /// <summary>
        /// Retorna uma lista de usuários pelo Id da classe
        /// </summary>
        /// <param name="classId">Id da classe</param>
        /// <returns>IEnumerable User</returns>
        [HttpGet("List/ByClass/{classId:long}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsersByClassId(long classId)
        {
            long[] usersIds = this._unitOfWork.GetRepository<UsersClasses>().GetQueryable().Where(x => x.ClassId == classId).Select(x => x.UserId).ToList().ToArray();

            List<User> users = this.repository.GetEntitiesByIdsAsync(usersIds).Result.ToList();

            if (users is null)
                return NotFound("Entidades não encontradas");

            return Ok(users);
        }

        /// <summary>
        /// Retorna uma lista de usuários pelo Id da classe, e filtrando pelo IsTeacher
        /// </summary>
        /// <param name="classId">Id da classe</param>
        /// <param name="isTeacher">É professor ou não</param>
        /// <returns>IEnumerable User</returns>
        [HttpGet("List/ByClass/{classId:long}/{isTeacher:bool}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsersByClassIdAndByIsTeacher(long classId, bool isTeacher)
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
