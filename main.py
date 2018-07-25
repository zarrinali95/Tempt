import webapp2
import os
import jinja2
from google.appengine.ext import ndb
from models import UserResponse

jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        console.log('get')
        #template = jinja_current_directory.get_template('popup.html')
        #self.response.write(template.render())

        self.response.headers['Content-Type'] = 'text/plain'


    def post(self):
        console.log('post')
        task_input = self.request.get('task')
        minute_input = self.request.get('time')
        template_vars = {
            'user_task': task_input,
            'minutes': minute_input
        }

        task_query = UserResponse.query(UserResponse.task == task_input).fetch()
        minute_query = UserResponse.query(UserResponse.minutes == minute_input).fetch()

        user_input = UserResponse(task='do dishes', minutes=minute_input)
        user_input.put()

        template = jinja_current_directory.get_template('popup.html')
        self.response.write(template.render(template_vars))

app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
