using BackEnd_Solution.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd_Solution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EscolaridadeController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public EscolaridadeController(DataBaseContext context) 
            => _context = context;

        [HttpGet()]
        public async Task<ActionResult> GetAll()
        {
            try
            {
                var escolaridades = await _context.Escolaridade.ToListAsync();
                return Ok(escolaridades);
            }
            catch (Exception ex )
            {
                var error = ex.Message;
                throw;
            }

        }
    }
}
