using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChamadaEBD.BackEnd._Controllers_._CheckinController_
{
    [ApiController]
    [Route("[Controller]")]
    public class CheckinController : CrudControllerBase<Checkin>
    {
        public CheckinController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            
        }

        #region Actions
        [HttpGet("List/byClass/{classId:long}")]
        public async Task<ActionResult<IEnumerable<Checkin>>> GetCheckinsByClass(long classId)
        {
            if (classId < 0)
                return BadRequest("Id inválido");

            List<Checkin> checkins = this.repository.GetQueryable().Where(x => x.ClassId == classId).AsNoTracking().ToList();

            if (checkins is null)
                return NotFound("Entidades não encontradas");

            return Ok(checkins);
        }

        [HttpGet("List/byClass/{classId:long}/ByRegisterDateTime")]
        public async Task<ActionResult<IEnumerable<Checkin>>> GetCheckinsByClassAndRegisterDateTime(long classId, [FromQuery]DateTime registerDateTime)
        {
            if (classId < 0)
                return BadRequest("Id inválido");

            List<Checkin> checkins = this.repository.GetQueryable().Where(x => x.ClassId == classId && x.RegisterDateTime.Date == registerDateTime.Date).AsNoTracking().ToList();

            if (checkins is null)
                return NotFound("Entidades não encontradas");

            return Ok(checkins);
        }
        #endregion
    }
}
