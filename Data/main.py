import webapp2
import os
import jinja2
from google.appengine.ext import ndb

jinja_current_dir = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_current_dir.get_template('popup.html')
        self.response.write(template.render())


    def post(self):
        task_input = self.request.get('task')
        template_vars = {
            'user_task': task_input,
        }

        template = jinja_current_directory.get_template('popup.html')
        self.response.write(template.render(template_vars))
app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
