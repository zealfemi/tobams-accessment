import Banner from "./Banner";

export default function ImageText() {
  return (
    <div className="p-6 md:py-16 lg:px-16 flex flex-col gap-6 md:gap-25">
      <Banner heading="Corporate Trainings">
        <Banner.Image image="/images/image-3.png" alt="corporate trainings" />
        <Banner.Content
          heading="Corporate Trainings"
          description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
          list={[
            "Leadership Training",
            "Strategic Planning and Implementation",
            "Project Management",
            "Sustainability Training",
            "Customised Training",
          ]}
        />
      </Banner>

      <Banner heading="Personalised Individual Training">
        <Banner.Content
          heading="Personalised Individual Training"
          description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.  "
          list={[
            "Leadership Development",
            "Soft Skills Development",
            "Industry Specific Knowledge",
            "Technical Skills Enhancement",
            "Time Management and Productivity",
            "Career Development",
          ]}
        />
        <Banner.Image image="/images/image-4.png" alt="corporate trainings" />
      </Banner>

      <Banner heading="Capacity Development">
        <Banner.Image image="/images/image-5.png" alt="Capacity Development" />
        <Banner.Content
          heading="Capacity Development"
          description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
          list={[
            "Tailored Training Programs",
            "Expert-Led Workshops",
            "Personalized Mentorship",
            "Technical Skills Enhancement",
            "Collaborative Learning Environment",
            "Ongoing Support and Resources",
          ]}
        />
      </Banner>
    </div>
  );
}
