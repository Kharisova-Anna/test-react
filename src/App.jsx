import Modal from "./components/Modal/Modal"
import Message from "./components/Message/Message"
const App = () => {
  return (
    <div>
      <Modal title='Children how it works'>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non id eaque assumenda cum ex asperiores ipsum ullam, in magni, numquam, deserunt
            eum quas inventore exercitationem animi consectetur. Eos, amet quod.
          </h2>
          <button>CLICK</button>
      </Modal>
      
      <Modal title='Login'>
        <input />
        <input />
        <button>Click</button>
      </Modal>
      <Modal title='Messages box'>
        <Message classn text='Куплю праску!' author='Олена' />
        <Message text='Продам телевізор' author='Макс' />
        <Message text='Куплю шапку' author='Ігор' />
      </Modal>


    
    </div>
  )
}

export default App