using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : CrudControllerBase<Student>
    {
        public StudentController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        #region Actions
        [HttpGet("ClassRoom/{classRoomId:long}")]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudentByClassRoom(long classRoomId)
        {
            IQueryable<Student> queryable = this.repository.GetQueryable();

            List<Student> entities = queryable.Where(x => x.ClassRoomId == classRoomId).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }
        #endregion
    }
}
