using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[controller]")]
    public class TeacherCheckinController : CrudControllerBase<TeacherCheckin>
    {
        public TeacherCheckinController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        #region Actions
        [HttpGet("ClassRoom/{classRoomId:long}")]
        public async Task<ActionResult<IEnumerable<TeacherCheckin>>> GetStudentByClassRoom(long classRoomId)
        {
            IQueryable<TeacherCheckin> queryable = this.repository.GetQueryable();

            List<TeacherCheckin> entities = queryable.Where(x => x.ClassRoomId == classRoomId).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }
        #endregion
    }
}
