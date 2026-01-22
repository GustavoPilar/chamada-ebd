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
    }
}
