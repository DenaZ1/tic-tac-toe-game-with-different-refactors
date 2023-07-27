import "./Modal.css";

type Props = {
message: string;
}

export default function Model({ message }: Props) {
    return (
    <div className="modal">
    <div className="modal-contents">
      <p>{ message }</p>
      <button>Play again</button>
    </div>
  </div>
    );
}