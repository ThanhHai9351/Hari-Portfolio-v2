import InfiniteMenu from './InfiniteMenu/InfiniteMenu';
import Lanyard from './Lanyard/Lanyard';
import PixelTransition from './PixelTransition/PixelTransition';
import SplashCursor from './SplashCursor/SplashCursor';

const items = [
  {
    image: 'https://avatars.githubusercontent.com/u/104017247?v=4',
    link: 'https://github.com/ThanhHai9351',
    title: 'Giới thiệu',
    description: 'Tìm hiểu về Hari và sứ mệnh của chúng tôi'
  },
  {
    image: 'https://chungnhanquocgia.com/wp-content/uploads/2022/01/dich-vu-cong-la-gi-dac-diem-va-hinh-thuc-cung-cap-dich-vu-cong-1.jpg',
    link: 'https://github.com/ThanhHai9351',
    title: 'Dịch vụ',
    description: 'Các giải pháp và dịch vụ Hari cung cấp'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxcZsYxikhDdq4KaJv7PHqgdvUDqHaYLstA&s',
    link: 'https://github.com/ThanhHai9351',
    title: 'Dự án',
    description: 'Những dự án tiêu biểu Hari đã thực hiện'
  },
  {
    image: 'data:image/jpeg;base64,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',
    link: 'https://github.com/ThanhHai9351',
    title: 'Liên hệ',
    description: 'Kết nối với đội ngũ Hari ngay hôm nay'
  }
];
function App() {
  return (
    <div>
      <div className='absolute z-10 top-0 left-10 h-36 w-36'>
        <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} />
      </div>
      <div style={{ height: '800px', position: 'relative' }}>
        <InfiniteMenu items={items} />
      </div>
      <div className='flex'>
        <PixelTransition
          firstContent={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
            </div>
          }
          gridSize={12}
          pixelColor='#ffffff'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <PixelTransition
          firstContent={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
            </div>
          }
          gridSize={12}
          pixelColor='#ffffff'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <PixelTransition
          firstContent={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
            </div>
          }
          gridSize={12}
          pixelColor='#ffffff'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <PixelTransition
          firstContent={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
            </div>
          }
          gridSize={12}
          pixelColor='#ffffff'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <PixelTransition
          firstContent={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
            </div>
          }
          gridSize={12}
          pixelColor='#ffffff'
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>
      <SplashCursor />
    </div>
  )
}

export default App
