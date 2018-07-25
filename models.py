class UserResponse(ndb.Model):
    task = ndb.StringProperty()
    minutes = ndb.IntegerProperty()
