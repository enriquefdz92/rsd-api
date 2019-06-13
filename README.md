REDES Y SISTEMAS DISTRIBUIDOS
PROYECTO FINAL
ENRIQUE FERNANDEZ CASTILLA

** DOCUMENTACION **

-- CONECCIONES --

    Servidor 1    -> 3.16.187.188
    Servidor 2    -> 18.217.7.169
    Load Balancer -> api-loadbalancer-1651839401.us-east-2.elb.amazonaws.com
    Port : 3000

-- RUTAS --

/athlete

    Route: GET "/" 
    Description: Regresa todos los athletas registrados.
    Response Body: 
    [
        {
            "id": int,
            "name": string,
            "lastName": string,
            "age": int,
            "addedDate": string,
            "skills": [
                {
                    "id": int,
                    "lvl": string
                }
            ]
        }
    ]