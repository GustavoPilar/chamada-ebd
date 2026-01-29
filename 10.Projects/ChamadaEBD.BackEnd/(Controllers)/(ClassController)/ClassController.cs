using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[Controller]")]
    public class ClassController : CrudControllerBase<Class>
    {
        public ClassController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        #region Action

        /// <summary>
        /// Retorna uma classe através do Id do usuário
        /// </summary>
        /// <param name="userId">Id do usuário</param>
        /// <returns>Class</returns>
        [HttpGet("UserId/{userId:long}")]
        public async Task<ActionResult<Class>> GetClassByUserId(long userId)
        {
            if (userId < 0)
                return BadRequest("Id inválido");

            UsersClasses? usersClasses = this._unitOfWork.GetRepository<UsersClasses>().GetQueryable().Where(x => x.UserId == userId).AsNoTracking().FirstOrDefault();

            if (usersClasses is null)
                return Ok(new Class() { Description = "Sem classe" });

            Class? @class = this.repository.GetEntityByIdAsync(usersClasses.ClassId).Result;

            return Ok(@class);
        }
        #endregion
    }
}
