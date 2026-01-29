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
        [HttpGet("withoutClass")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserWithoutClass()
        {
            List<long> usersIds = this._unitOfWork.GetRepository<UsersClasses>().GetQueryable().Select(x => x.UserId).ToList();

            IQueryable<User> queryable = this.repository.GetQueryable().Where(x => !usersIds.Contains(x.Id));

            List<User> users = queryable.ToList();

            if (users is null)
                return NotFound("Entidades não encontradas");

            return Ok(users);
        }
        #endregion
    }
}
