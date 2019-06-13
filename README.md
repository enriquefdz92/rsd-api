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

    Method: GET
    Route: "/" 
    Description: Regresa un array con todos los athletas registrados.
    Request Body (application/json): N/A
    Response Body (200): 
 
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

    Method: GET
    Route: "/:id" 
    Description: Regresa un objeto con informacion del athleta con id = :id
    Request Body (application/json): N/A
    Response Body (200): 
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

    Method: GET
    Route: "/:id/Skills" 
    Description: Regresa un array con los Skills del athleta con id = :id
    Request Body (application/json): N/A
    Response Body (200): 
        [
                {
                    "id": int,
                    "lvl": string
                }
        [
 
    Method: POST
    Route: "/" 
    Description: Agrega un athleta a la lista de athletas
    Request Body (application/json): 
        {
            "name": string,
            "lastName": string
        }
    Response Body (200): 
        {
            "name": string,
            "lastName": string,
            "addedDate": string,
            "id": int
        }

    Method: PUT
    Route: "/:id/Skills" 
    Description: agrega un objeto Skill al athleta con id = :id
    Request Body (application/json): 
        {
            "id": int,
            "lvl": string
        }
    Response Body (200): 
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

    Method: DELETE
    Route: "/:id" 
    Description: Elimina athleta con id = :id
    Request Body (application/json): N/A
    Response Body (200): 
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

/skill

    Method: GET
    Route: "/" 
    Description: Regresa un array con todos los skills disponibles
    Request Body (application/json): N/A
    Response Body (200): 
        [
            {
                "id" : int,
                "title": string,
                "lvl_sc": string,
                "lvl_in": string,
                "lvl_rx": string
            }
        ]

    Method: GET
    Route: "/:id" 
    Description:  Regresa un objeto skill con id = :id
    Request Body (application/json): N/A
    Response Body (200): 
            {
                "id" : int,
                "title": string,
                "lvl_sc": string,
                "lvl_in": string,
                "lvl_rx": string
            }

    Method: POST
    Route: "/" 
    Description: Agrega un nuevo skill a la lista de skills 
    Request Body (application/json): 
            {
                "title": string,
                "lvl_sc": string,
                "lvl_in": string,
                "lvl_rx": string
            }
    Response Body (200): 
            {
                "id" : int,
                "title": string,
                "lvl_sc": string,
                "lvl_in": string,
                "lvl_rx": string
            }

    Method: DELETE
    Route: "/:id" 
    Description: Elimina el skill con id = :id de la lista de skills 
    Request Body (application/json): N/A
    Response Body (200): 
            {
                "id" : int,
                "title": string,
                "lvl_sc": string,
                "lvl_in": string,
                "lvl_rx": string
            }
        


