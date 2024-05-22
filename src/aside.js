const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const Aside = () => {
    return <aside>
        
<form>
    <h1><i data-feather="check-square"></i> Iniciar sesión</h1>
    <br></br>
        <div className="form-group">
            <label for="inputEmail"> <i data-feather="mail"></i> Email</label>
 <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
        </div>
        <br></br>
<div className="form-group">
    <label for="inputPassword"> <i data-feather="lock"></i> Contraseña</label>
<input type="password" className="form-control" id="inputPassword" placeholder="Contraseña"/>
</div>
<br></br>
<div className="form-group">
    <label for="inputPassword"> <i data-feather="more-horizontal"></i> Ingrese el código de verificación</label>
<input type="password" className="form-control" id="inputPassword" placeholder="Código de 8 dígitos"/>
</div>
<div className="form-group">
    <label className="form-check-label"><input type="checkbox"/> Mantener sesión iniciada</label>
</div>
<br></br>
    <button type="submit" className="btn btn-primary">Iniciar sesion</button>
</form>
    </aside>;
}

export default Aside;