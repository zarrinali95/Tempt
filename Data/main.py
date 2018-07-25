import webapp2
import os
import jinja2

jinja_current_dir = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_current_dir.get_template('popup.html')
        self.response.write(template.render())

        
    def post(self):
        cheese_input = self.request.get('cheese')
        crust_input = self.request.get('crust')
        template_vars = {
            'cheese_answer': cheese_input,
            'crust_answer': crust_input,
            'sauce_answer': self.request.get('sauce')
        }

        template = jinja_current_directory.get_template('templates/confirmation.html')
        self.response.write(template.render(template_vars))
