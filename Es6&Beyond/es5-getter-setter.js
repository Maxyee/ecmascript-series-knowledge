var o = {
    _id: 10,
    get id() {return this._id++},
    set id(v) { this._id = v; }
}

o.id;
o.id;

o.id = 20;
o.id;

//and 

o._id;
o._id;