using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ErpSystem.Models;


namespace ErpSystem.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
           return View();
        }

        public ActionResult About()
        {
            return View();
        }
        
        [HttpGet]
        public ActionResult Listar()
        {
            return Json(new Category() { CategoryID = 1, CategoryName = "Categoria nova", Description = "Descrição" }, JsonRequestBehavior.AllowGet); 
            
        }
    }
}
