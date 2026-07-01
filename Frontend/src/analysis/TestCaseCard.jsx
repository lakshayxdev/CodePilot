const TestCaseCard = ({ testCase }) => {

  return (

    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6">

      <div className="mb-5">

        <h3 className="text-white font-semibold mb-2">

          Input

        </h3>

<pre className="bg-[#0D0D0D] p-4 rounded-lg text-green-400 text-sm leading-7 whitespace-pre-wrap break-all overflow-x-auto">
{testCase.input}

        </pre>

      </div>

      <div className="mb-5">

        <h3 className="text-white font-semibold mb-2">

          Expected Output

        </h3>

<pre className="bg-[#0D0D0D] p-4 rounded-lg text-violet-400 text-sm leading-7 whitespace-pre-wrap break-all overflow-x-auto">
{testCase.expectedOutput}

        </pre>

      </div>

      <div>

        <h3 className="text-white font-semibold mb-2">

          Description

        </h3>

        <p className="text-zinc-400 leading-7">

          {testCase.description}

        </p>

      </div>

    </div>

  );

};

export default TestCaseCard;