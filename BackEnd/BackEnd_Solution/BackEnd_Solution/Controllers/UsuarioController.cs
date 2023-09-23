using BackEnd_Solution.Domain;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd_Solution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Usuario usuario)
        {
            await _usuarioService.CriarUsuario(usuario);
            return Ok(usuario);
        }

        [HttpPost("Delete")]
        public async Task<IActionResult> Delete([FromBody] Usuario usuario)
        {
            await _usuarioService.DeletarUsuario(usuario);
            return Ok();
        }

        [HttpPost("Update")]
        public async Task<IActionResult> Update([FromBody] Usuario usuario)
        {
            await _usuarioService.AtualizarUsuario(usuario);
            return Ok();
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var usuarios = await _usuarioService.ObterUsuarios();
            return Ok(usuarios);
        }

        [HttpGet("GetById")]
        public async Task<IActionResult> GetById(int id)
        {
            var usuarios = await _usuarioService.ObterUsuario(id);
            return Ok(usuarios);
        }
    }
}
