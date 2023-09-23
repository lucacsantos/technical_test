namespace BackEnd_Solution.Domain
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly IEscolaridadeRepository _escolaridadeRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository, IEscolaridadeRepository escolaridadeRepository)
        {
            _usuarioRepository = usuarioRepository;
            _escolaridadeRepository = escolaridadeRepository;
        }

        public async Task CriarUsuario(Usuario usuario)
        {
            UsuarioValidators validators = new UsuarioValidators();

            try
            {
                validators.Validate(usuario);
                await _usuarioRepository.Create(usuario);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task DeletarUsuario(Usuario usuario)
        {
            try
            {
                await _usuarioRepository.Delete(usuario);
            }
            catch (Exception ex)
            {
                throw;
            }
        }


        public async Task AtualizarUsuario(Usuario usuario)
        {
            UsuarioValidators validators = new UsuarioValidators();

            try
            {
                validators.Validate(usuario);
                await _usuarioRepository.Update(usuario);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<List<UsuarioViewModel>> ObterUsuarios()
        {
            try
            {
                var usuarios = await _usuarioRepository.GetAll();
                List<UsuarioViewModel> usuariosViewModel = new();
                foreach (var usuario in usuarios)
                {
                    var escolaridade = await _escolaridadeRepository.GetById(usuario.IdEscolaridade);
                    var usuarioViewModel = new UsuarioViewModel()
                    {
                        IdUsuario = usuario.IdUsuario,
                        IdEscolaridade = usuario.IdEscolaridade,
                        Nome = usuario.Nome,
                        SobreNome = usuario.SobreNome,
                        Email = usuario.Email,
                        Descricao = escolaridade.Descricao,
                        DataNascimento = usuario.DataNascimento
                    };
                    usuariosViewModel.Add(usuarioViewModel);
                }
                return usuariosViewModel;
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public async Task<UsuarioViewModel> ObterUsuario(int id)
        {
            try
            {
                var usuario = await _usuarioRepository.GetById(id);

                UsuarioViewModel usuariosViewModel = new();

                var escolaridade = await _escolaridadeRepository.GetById(usuario.IdEscolaridade);
                return new UsuarioViewModel()
                {
                    IdUsuario = usuario.IdUsuario,
                    IdEscolaridade = usuario.IdEscolaridade,
                    Nome = usuario.Nome,
                    SobreNome = usuario.SobreNome,
                    Email = usuario.Email,
                    Descricao = escolaridade.Descricao,
                    DataNascimento = usuario.DataNascimento
                };


            }
            catch (Exception ex)
            {
                throw;
            }

        }
    }
}