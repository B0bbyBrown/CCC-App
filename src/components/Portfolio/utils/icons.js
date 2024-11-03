import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaYoutube,
  FaMedium,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaPalette,
  FaHandshake,
  FaChalkboardTeacher,
  FaBook,
  FaTrophy,
  FaProjectDiagram,
  FaTools,
  FaTheaterMasks,
  FaMicroscope,
  FaUsers,
  FaCrown,
} from "react-icons/fa";

export const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaTwitter,
  behance: FaBehance,
  dribbble: FaDribbble,
  instagram: FaInstagram,
  youtube: FaYoutube,
  medium: FaMedium,
};

export const contactIcons = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
};

export const categoryIcons = {
  Projects: FaProjectDiagram,
  Skills: FaTools,
  Experience: FaBriefcase,
  Education: FaGraduationCap,
  Research: FaMicroscope,
  ArtProjects: FaPalette,
  Exhibitions: FaTheaterMasks,
  Workshops: FaChalkboardTeacher,
  Certifications: FaCertificate,
  Achievements: FaTrophy,
  Development: FaCode,
  Teamwork: FaUsers,
  Leadership: FaCrown,
};

export const getIconForCategory = (category) => {
  return categoryIcons[category] || FaProjectDiagram;
};
