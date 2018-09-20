export default {
    bind(el, binding, vnode) {
        el.verror = document.createElement("DIV")
        el.verror.className = 'error__message'
        // clear the error class of input
        el.addEventListener('input', () => {    
            const errorList = document.querySelectorAll('.error')
            for ( let i = 0; i < errorList.length; i += 1 ) {
                errorList[i].className = ""
            }               
        })        
    },
    componentUpdated(el, binding, vnode) {
        // upadate error message
        if(binding.value) {
            el.verror.innerHTML = binding.value
        }        
        // check if verror is present to remove
        if(el.verror && el.verror.parentNode !== null ){
            el.verror.parentNode.removeChild( el.verror )
        }
        // check if verror is present to add
        if(el.verror && binding.value) {
            el.className = "error";          
            el.parentNode.appendChild( el.verror )           
        }
    }
}