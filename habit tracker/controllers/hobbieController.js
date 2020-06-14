const Hobbie = require("../models/hobbie");

// view/render Home page
module.exports.home = function(req,res){
    Hobbie.find({},function(error,hobbie){
        if(error)
        {
            console.log("error in finding hobbies");
            return;  
        }
        return res.render("home",{title:"Hobbie Tracker | Home",hobbieList:hobbie});
    });
    
}

// view/render form page for adding new hobbie
module.exports.addForm = function(req,res){
    return res.render("addForm",{title:"Hobbie Tracker | Add Hobbie"})
}

// add new hobbie 
module.exports.addHobbie = function(req,res){
    Hobbie.create({name:req.body.hobbie},function(error,hobbie){
        if(error){
            console.log("error in addig hobbie");
            return;
        }
        return res.redirect("/");
    });
}

// delete a hobbie
module.exports.deleteHobbie = function(req,res){
    Hobbie.deleteMany({_id:{$in:req.body.id}}, function(error, hobbie) {
        if (error) {
          console.log("error in deleting tasks");
          return;
        } else {
          return res.redirect("/");
        }
      });
}

// view/render calender Page
module.exports.calenderPage = function(req,res){
    Hobbie.find({},function(error,hobbie){
        if(error)
        {
            console.log("error in finding hobbies");
            return;  
        }
        return res.render("calenderView",{title:"Hobbie Tracker | Calender View",hobbieList:hobbie});
    });
}