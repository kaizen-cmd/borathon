class People(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(80), nullable=False)
    lname = db.Column(db.String(120), nullable=False)
    age = db.Column(db.String(3), nullable=False)


    def __init__(self, fname, lname, age):
        self.fname = fname
        self.lname = lname
        self.age = age