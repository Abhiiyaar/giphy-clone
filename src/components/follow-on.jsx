import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/abhiiyaar/" target="_blank">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/abhiiyaar/" target="_blank">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com/abhiiyaar" target="_blank">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
