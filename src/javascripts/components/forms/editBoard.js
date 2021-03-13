import selectBoard from './selectBoard';

const editBoardForm = (boardObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-board-form" class="mb-4">

      <div class="form-group">
        <label for="title">Board Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Enter board Title" value="${boardObject.board_title}" required>
      </div>
      
      <button type="submit" id="update-board--${boardObject.firebaseKey}" class="btn btn-dark float-right">Update board</button>
      
    </form>`;

  selectBoard(boardObject);
};

export default editBoardForm;
