const express = require("express");
const app = express();
const PORT = 8080;
// const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const https = require("https")
const fs = require("fs")

const data = require("./data/index");

/****************motor de plantillas ******************/
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
/****************motor de plantillas ******************/

/****************MIDDLEWARES ******************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/****************MIDDLEWARES ******************/
const auth = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
/****************SESSIONS ******************/
// app.use(session(
//     {
//         secret: "misecreto",
//         resave: true,
//         saveUninitialized: true
//     }
// ));
/****************SESSIONS ******************/

/****************PASSPORT ******************/
app.use(passport.initialize());
app.use(passport.session());

//SIGN IN
// passport.use(
//     "local-login",
//     new LocalStrategy((username, password, done) => {
//         //VALIDACION BD

//         let users = data.find(x => {
//             return x.username === "charly" && x.password === "123456"
//         })
//         if (users) return done(null, users);

//         done(null, false);
//     }
//     ));
passport.use(new FacebookStrategy({
    clientID:"asdf",
    clientSecret:"asdf",
    callbackURL:"http://localhost:8080/auth/facebook/callback"
}, (accessToken, profile, done) => {
    //VALIDACION BD
    console.log(profile);
    // let users = data.find(x => {
    //     return x.username === "charly" && x.password === "123456"
    // })
    // if (users) return done(null, users);

    done(null, profile);
}
));


//SIGN UP
passport.use(
    "local-signup",
    new LocalStrategy({
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    }, (req, username, password, done) => {
        let users = data.find(x => {
            return x.username === "charly"
        })

        if (users) {
            console.log("usuario ya existe");
            return done(null, false);
        }

        let userNew = {
            id: Math.random(),
            username,
            password
        }
        data.push(userNew);

        return done(null, userNew)
    }
    ));

//SERIALIZATION
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//DESERIALIZATION
passport.deserializeUser((id, done) => {
    //VALIDACION BD
    done(null, { id: 1, name: "charly", age: 32 })

})

/****************PASSPORT ******************/

/****************ROUTES ******************/
app.get("/login", (req, res) => {
    res.render("login");
    console.log(req.user)
})
app.get("/signup", (req, res) => {
    res.render("signup");
    console.log(req.user)
})

app.get("/home", auth, (req, res) => {
    res.render("profile");
})
app.get("/authenticationFailed", (req, res) => {
    res.send("Usuario o contraseña invalidos!");
    console.log(req.user)
})
app.get("/registerFailed", (req, res) => {
    res.send("Usuario existente!");
    console.log(req.user)
})

app.post("/login", passport.authenticate("local-login", {
    successRedirect: "/home",
    failureRedirect: "/authenticationFailed"
}));

app.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/login",
    failureRedirect: "/registerFailed"
}));

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login")
})

app.get("/auth/facebook", (req, res) => {
    passport.authenticate("facebook"
    // ,{
    //     scope:["user_friends","manage_pages"]
    // }
    );
})

/****************ROUTES ******************/

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});