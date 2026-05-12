var listMemb = new Array()
var ventana

function test(){
    window.alert('Hola')
}


function Miembro(id, name, genre){
    this.id = id
    this.name = name
    this.genre = genre

    this.getId = function(){
        return this.id
    }
    this.getName = function(){
        return this.name
    }
    this.getGenre = function(){
        return this.genre
    }
    this.setId = function(newId){
        this.id = newId
    }
    this.setName = function(newName){
        this.name = newName
    }
    this.setGenre = function(newGenre){
        this.genre = newGenre
    }
    this.verAll = function(){
        window.alert(this.id+"-"+this.name+"-"+this.genre)
    }
}

function loadList(){
    listMemb[0] = new Miembro(55,'Pepe','Masculino')
    listMemb[1] = new Miembro(52,'Pascuala','Femenino')
    listMemb[2] = new Miembro(15,'Santi','Masculino')
    listMemb.push(new Miembro(33,'Luna','Femenino'))
    listMemb.unshift(new Miembro(10,'Mila','Femenino'))
    listMemb[listMemb.length] = new Miembro(11,'Aramís','Masculino')
}

function verMiembros(){
    for (let index = 0; index < listMemb.length; index++) {
        listMemb[index].verAll()        
    }
} 

function agregarMiembro(){
    var ide = parseInt(document.getElementById("boxId").value)
    var nom = document.getElementById("boxName").value
    var gen = document.getElementsByName("genre")
    var sel
    for (let index = 0; index < gen.length; index++) {
        if (gen[index].checked)
            sel = gen[index].value        
    }
    listMemb.push(new Miembro(ide,nom,sel))
    window.alert('Agregado Ok!')
}

function verMiembroVentana(){
    ventana = window.open("","","height=400,width=500")
    content = "<html><head><title>Lista de Miembros</title></head><body bgcolor='salmon'>"
    ventana.document.write(content)
    for (let index = 0; index < listMemb.length; index++) {
        ventana.document.write(listMemb[index].getName())
        ventana.document.write("<br/>")
        
    }
    content = "</body></html>"
    ventana.document.write(content)
}


// modificar y actualizar miembro
function ModificarMiembro(){
    var ide = parseInt(document.getElementById("modificarId").value)
    var nom = document.getElementById("modificarNombre").value
    var gen = document.getElementsByName("modificarGenre")
    var sel
    for (let i = 0; i < gen.length; i++){
        if (gen[i].checked) sel = gen[i].value
    }
    for (let i = 0; i < listMemb.length; i++){
        if (listMemb[i].getId() === ide){
            listMemb[i].setName(nom)
            listMemb[i].setGenre(sel)
            window.alert("Mienbro Actualizado")
            return
        }
    }
    window.alert('No se encontró un miembro con ese ID.')
}


// eliminar miembro
function eliminarMiembro(){
    var ide = parseInt(document.getElementById("eliminarId").value)
    for (let i = 0; i < listMemb.length; i++){
        if (listMemb[i].getId() === ide){
            listMemb.splice(i,1)
            window.alert("Miembro eliminado")
            return
        }
    }
    window.alert("No se encontro un miembro con ese ID")
}