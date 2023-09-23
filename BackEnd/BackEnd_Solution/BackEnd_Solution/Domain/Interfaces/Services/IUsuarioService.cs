namespace BackEnd_Solution.Domain
{
    public interface IUsuarioService
    {
        Task<List<UsuarioViewModel>> ObterUsuarios();
        Task<UsuarioViewModel> ObterUsuario(int id);
        Task CriarUsuario(Usuario usuario);
        Task DeletarUsuario(Usuario usuario);
        Task AtualizarUsuario(Usuario usuario);
    }
}
