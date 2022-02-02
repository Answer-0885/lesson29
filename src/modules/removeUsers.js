import {
   render
} from "./render"
export const removeUsers = () => {
   const tbody = document.getElementById('table-body');

   tbody.addEventListener('click', (event) => {
      if (event.target.closest('.btn-remove')) {
         const tr = event.target.closest('tr')
         const id = tr.dataset.key

         userService.removeUser(id).then(() => {
            userService.getUsers().then(users => {
               render(users);
            })
         })
      }
   })
}