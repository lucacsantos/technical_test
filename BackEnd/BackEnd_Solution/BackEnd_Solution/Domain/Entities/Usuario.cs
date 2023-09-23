namespace BackEnd_Solution.Domain
{
    public sealed class Usuario
    {
        public int IdUsuario { get; set; }
        public int IdEscolaridade { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
    }
}
