import React from "react";

const Modal = (props) => {
  const { open, close, header, handleSend } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>

          <main>{props.children}</main>
          <footer>
            <button
              className="close"
              onClick={handleSend}
              style={{ marginRight: "10px", backgroundColor: "#9ab1f3" }}
            >
              {" "}
              보내기{" "}
            </button>
            <button className="close" onClick={close}>
              {" "}
              닫기{" "}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
