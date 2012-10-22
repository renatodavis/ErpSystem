using System.Web.Mvc;
using ErpSystem.Models;

namespace ErpSystem.Controllers
{
    public class CategoriasController : Controller
    {
        public ActionResult Index()
        {
            return Json(new Category() { CategoryID = 1, CategoryName = "Categoria nova" ,Description = "Descrição"}, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult Listar()
        {
            return Json(new Category() { CategoryID = 1, CategoryName = "Categoria nova", Description = "Descrição" }, JsonRequestBehavior.AllowGet);
            
        }

    }
}
