namespace BackEnd_Solution.Domain
{
    public interface IEscolaridadeService
    {
        Task<List<Escolaridade>> ObterEscolaridades();
    }
}
