var o = {
    _id: 10,
    get id() {return this._id++},
    set id(v) { this._id = v; }
}

o.id;       // 10
o.id;       // 11

o.id = 20;
o.id;       // 20

//and 

o._id;      // 21
o._id;      // 21 -- still !