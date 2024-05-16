import { Constraints, TextTyping } from "@/components";

export default function About() {
  return (
    <main>
      <section className="py-24">
        <Constraints>
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 md:col-span-6 xl:col-span-7 space-y-2">
              <h2 className="text-palette-yellow">Who the f*** is Alice?</h2>
              <p>
                I’m a freelance creative developer from Amsterdam, the
                Netherlands. In 2018 I graduated from the University of Applied
                Sciences in Amsterdam and got my BaSc in Communication and
                Multimedia Design. I’ve been freelancing since July 2020, and
                since 2021 I’ve been a judge at Awwwards.
                <br />
                <br />
                Since 2022 I’ve been teaching parttime at the Associate
                Degree Frontend Design and Development at the Amsterdam
                University of Applied Sciences.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-5 bg-red-100"></div>
          </div>
        </Constraints>
      </section>
      <section className="py-24">
        <Constraints>
          <h3 className="pb-4">Experience</h3>
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr className="">
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </Constraints>
      </section>
    </main>
  );
}
