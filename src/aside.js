const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const Aside = () => {
    return <aside>
        
<form className="text-white py-4 bg-dark custom">
    <h1><i data-feather="check-square"></i> REGÍSTRATE</h1>
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
    <label for="inputPassword"> <i data-feather="phone-call"></i> Número de teléfono</label>
<input type="password" className="form-control" id="inputPassword" placeholder="Teléfono"/>
</div>
<div className="form-group">
    <label className="form-check-label"> ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a></label>
</div>
<br></br>
    <button type="submit" className="btn btn-primary">Registrarme</button>
</form>
    </aside>;
}

export default Aside;