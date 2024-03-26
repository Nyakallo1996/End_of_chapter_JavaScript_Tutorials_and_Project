const localTodosContainer = document.getElementById(
    'local-storage-todos-container'
  );
  const localInputEle = document.getElementById('local-storage-todo-input-ele');
  const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');
  const sessionTodosContainer = document.getElementById(
    'session-storage-todos-container'
  );
  const sessionInputEle = document.getElementById(
    'session-storage-todo-input-ele'
  );
  const sessionAddTaskBtn = document.getElementById(
    'session-storage-add-task-btn'
  );
  
  function createTodoLiElements(todoArray, storeType) {
    return todoArray.map((i, index) => {
      const liElement = document.createElement('li');
      const checkboxEle = document.createElement('input');
      const labelEle = document.createElement('label');
  
      checkboxEle.setAttribute('type', 'checkbox');
      checkboxEle.setAttribute('id', `${storeType}-chbx-${index}`);
      labelEle.setAttribute('for', `${storeType}-chbx-${index}`);
  
      if (i.checked) {
        checkboxEle.checked = true;
        labelEle.classList.add('todo-task-done');
      }
  
      storeType === 'local' &&
        checkboxEle.addEventListener('click', (e) => {
          const todoArr = JSON.parse(localStorage.getItem('codesweetlyStore'));
          todoArr[e.target.getAttribute('id').split('-')[2]].checked =
            !todoArr[e.target.getAttribute('id').split('-')[2]].checked;
          localStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));
          labelEle.classList.toggle('todo-task-done');
        });
  
      storeType === 'session' &&
        checkboxEle.addEventListener('click', (e) => {
          const todoArr = JSON.parse(sessionStorage.getItem('codesweetlyStore'));
          todoArr[e.target.getAttribute('id').split('-')[2]].checked =
            !todoArr[e.target.getAttribute('id').split('-')[2]].checked;
          sessionStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));
          labelEle.classList.toggle('todo-task-done');
        });
  
      labelEle.textContent = i.text;
      liElement.append(checkboxEle, labelEle);
      return liElement;
    });
  }
  
  window.addEventListener(
    'load',
    (() => {
      const localTodoArray =
        JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
      const localTodoLiElements = createTodoLiElements(localTodoArray, 'local');
      const sessionTodoArray =
        JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
      const sessionTodoLiElements = createTodoLiElements(
        sessionTodoArray,
        'session'
      );
      localTodosContainer.replaceChildren(...localTodoLiElements);
      sessionTodosContainer.replaceChildren(...sessionTodoLiElements);
    })()
  );
  
  localAddTaskBtn.addEventListener('click', () => {
    if (localInputEle.value.match(/^\w/)) {
      const currentTodoArray =
        JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
      const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: localInputEle.value },
      ];
      const todoLiElements = createTodoLiElements(newTodoArray, 'local');
      localStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));
      localTodosContainer.replaceChildren(...todoLiElements);
      localInputEle.value = '';
    }
  });
  
  sessionAddTaskBtn.addEventListener('click', () => {
    if (sessionInputEle.value.match(/^\w/)) {
      const currentTodoArray =
        JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
      const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: sessionInputEle.value },
      ];
      const todoLiElements = createTodoLiElements(newTodoArray, 'session');
      sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));
      sessionTodosContainer.replaceChildren(...todoLiElements);
      sessionInputEle.value = '';
    }
  });

