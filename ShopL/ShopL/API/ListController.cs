using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShopL.Data;
using ShopL.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShopL.API
{
    [Route("api/[controller]")]
    public class ListController : Controller
    {
        private ApplicationDbContext _context;
        public ListController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var list = _context.Lists.ToList();
            return Ok(list);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = _context.Lists.Where(i => i.Id == id).FirstOrDefault();
            return Ok(item);
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]List list)
        {
            _context.Lists.Add(list);
            _context.SaveChanges();
            return Ok();
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var item = _context.Lists.Where(i => i.Id == id).FirstOrDefault();
            _context.Remove(item);
            _context.SaveChanges();
            return Ok();
        }
    }
}
