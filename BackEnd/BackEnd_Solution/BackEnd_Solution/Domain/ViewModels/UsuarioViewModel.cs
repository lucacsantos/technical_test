namespace BackEnd_Solution.Domain
{
    public class UsuarioViewModel
    {
        public int IdUsuario { get; set; }
        public int IdEscolaridade { get; set; }
        public string? Nome { get; set; }
        public string? SobreNome { get; set; }
        public string? Email { get; set; }
        public string? Descricao { get; set; }
        public DateTime DataNascimento { get; set; }
    }
}
