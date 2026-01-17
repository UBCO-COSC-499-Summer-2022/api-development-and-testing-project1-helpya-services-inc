const Guard = require('express-guard');
const guard = new Guard();
const app = express();
const router = express.Router();

//not sure about login and logout
const consumer = new Guard.Role('consumer' , {
    can: ['login', 'logout', 'findAll'],   //not sure if these are pre defined ie class names
    func: async (req) => {
        const confirmC = await Promise.resolve('confirm_consumer');
        if(confirmC === 'confirm_consumer'){
            return true;
        }
        return false;
    },
})
const business = new Guard.Role('business' , {
    can: ['login', 'logout', 'findAll', 'update'],
    func: async (req) => {
        const confirmB = await Promise.resolve('confirm_business');
        if(confirmB === 'confirm_business'){
            return true;
        }
        return false;
    }
})

const admin = new Guard.Role('admin' , {
    can: ['*'], //can do anything
    func: async (req) => {
        const confirmA = await Promise.resolve('confirm_admin');
        if(confirmA === 'confirm_admin'){
            return true;
        }
        return false;
    }
})

const helpya = new Guard.Role('helpya' , {
    can: ['subscriptions'], 
    func: async (req) => {
        const confirmH = await Promise.resolve('confirm_helpya');
        if(confirmH === 'confirm_helpya'){
            return true;
        }
        return false;
    }
})

guard.roles = [consumer, business, admin, helpya];

//route handling for different operations 

//creating accounting history
router.post('/accounting',
guard.requireAny('create', 'business'),
(req, res) => {
    require("./app/routes/accounting.routes.js")(app);
}
)
//getting accounting for a business 
router.get('/accounting/:businessID',
guard.requireAny('findOne', ['business', 'admin']),
(req, res) => {
    require("./app/routes/accounting.routes.js")(app);
}
)
//updating an accounting for a business
router.post('/accounting/:businessID',
guard.requireAny('update', ['business', 'admin']),
(req, res) => {
    require("./app/routes/accounting.routes.js")(app);
}
)

//delete accounting
router.delete('/accounting/:businessID',
guard.requireAny('delete', ['business', 'admin']),
(req, res) => {
    require("./app/routes/accounting.routes.js")(app);
}
)

//add error handling here
