'use client'; // Add this only if you're using Next.js 13 and the 'app' directory
import { useState, useEffect } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string | JSX.Element;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Initial bot message
    const initialMessage: Message = {
      sender: 'bot',
      text: (
        <div className="text-left p-4">
      <h2 className="text-2xl font-semibold mt-4">COVER SHEET</h2>
      
      <h3 className="text-xl font-semibold mt-4">Key information</h3>
      <p className="mt-2">The document covers the exchange between</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>SpectraLink Innovations Ltd</strong>: Seller</li>
        <li><strong>QuantumBridge Ventures Ltd</strong>: Buyer</li>
      </ul>
      <p className="mt-2">to acquire</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Sale Shares</strong> for <strong>£369,250</strong></li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of key dates</h3>
      <p className="mt-2"><strong>Date of agreement:</strong></p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>01 June 2024</strong>: The date of the agreement and the Completion Date.</li>
      </ul>
      <p className="mt-2"><strong>Other key dates:</strong></p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>31 May 2024</strong>: The date the Data Room Index is referenced as of.</li>
        <li><strong>21 July 2024</strong>: The date the Data Room was referenced as of for the flash drive containing the documents.</li>
        <li><strong>Seventh anniversary of Completion</strong>: The deadline for the Buyer to notify the Seller of any claims arising from the warranties or the Tax Covenant.</li>
        <li><strong>24 months following Completion</strong>: The period during which the Seller is restricted from engaging in competing businesses, soliciting customers, or employing certain employees of the Company.</li>
        <li><strong>12 months prior to Completion</strong>: This timeframe relates to the Seller's post-completion restrictions on soliciting customers who were clients of the Company during this period.</li>
        <li><strong>Three months after Completion</strong>: This timeframe relates to the Seller's obligation to ensure that debts owing to the Company are realised in cash.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of termination clause</h3>
      <p className="mt-2">Here are the main termination clauses identified in the legal document:</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Breach of Warranties</strong>: If the Seller fails to meet the warranties outlined in Schedule 3 (except for those explicitly disclosed), the Buyer can make a claim. The Seller's total liability for all warranty claims is capped at £25,000. The Buyer must notify the Seller of any claim within seven years of the Completion Date, following specific deadlines for different types of claims. Importantly, the Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
        <li><strong>Breach of Tax Covenant</strong>: If the Seller fails to meet the tax covenant outlined in Schedule 4, the Buyer can make a claim. The Seller's liability for tax covenant claims is also capped at £25,000. The Buyer must notify the Seller of any claim within seven years of the Completion Date, following the same notification procedures as for warranty claims. Again, the Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of dispute clause</h3>
      <p className="mt-2">Here are the main dispute clauses identified in the legal document:</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Governing Law</strong>: This agreement establishes that English law will govern all disputes arising from the agreement, including those not directly related to the contract itself.</li>
        <li><strong>Jurisdiction</strong>: The parties agree that the courts of England and Wales will have the authority to resolve any disagreements, meaning either party can initiate legal action in these courts.</li>
        <li><strong>Notification of Claims</strong>: The agreement emphasizes the importance of timely notification of claims, requiring the Buyer to inform the Seller of any issues within seven years of the sale's completion.</li>
        <li><strong>Alternative Dispute Resolution</strong>: While the agreement doesn't mandate specific dispute resolution methods like mediation or arbitration, it acknowledges the possibility for the parties to agree in writing to use alternative methods, including arbitration, if they choose.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of liabilities</h3>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Scope</strong>: The Seller's total liability for all claims arising from the warranties and the tax covenant is capped at £25,000.</li>
        <li><strong>Trigger events</strong>: Claims can be made against the Seller for breaching any of the warranties listed in Schedule 3 or for breaching the tax covenant outlined in Schedule 4.</li>
        <li><strong>Procedure</strong>: The Buyer must notify the Seller in writing of any claim within seven years of the Completion Date, providing a summary of the claim and, as far as possible, an estimated amount claimed.</li>
        <li><strong>Limitations</strong>: The Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Summary of confidentiality</h3>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Confidentiality and announcements</strong>: The Seller and Buyer agree not to disclose the terms of this agreement or any confidential information relating to the Company or the Buyer to any third parties, except for their professional advisors. Neither party is allowed to make public announcements about the agreement without the other party's consent. However, the Buyer can announce the acquisition of the Sale Shares to the employees, clients, customers, or suppliers of the Company after Completion.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Rating for selling conditions</h3>
      <p className="mt-2"><strong>Rating: Unfavorable 🔴</strong></p>
      <p className="mt-2">The legal document appears to be unfavorable for the seller due to the limitations placed on their liability and the obligations they are required to fulfill.</p>
      <p className="mt-2">Here's a breakdown:</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Price and Payment:</strong> While the purchase price is fixed, there are no provisions for early payment discounts or other favorable terms for the seller.</li>
        <li><strong>Warranties and Returns:</strong> The Seller is obligated to provide extensive warranties, which could increase their risk and potential costs, especially if there are numerous claims. Additionally, the Seller's liability is capped at £25,000. While this provides some protection, it might be considered a less favorable term compared to a scenario with no liability cap or a higher cap.</li>
        <li><strong>Post-Completion Restrictions:</strong> The Seller is subjected to restrictions for a period of 24 months following completion, which could limit their ability to pursue other business opportunities or compete with the company. These restrictions might be considered unfavorable if they impact the Seller's future business ventures.</li>
      </ul>
      <p className="mt-2">Overall, the agreement places more emphasis on protecting the Buyer's interests with warranties and limitations on the Seller's liability, and the restrictions on the Seller's post-completion activities suggest a less favorable outcome for the seller.</p>
    </div>
      ),
    };
    setMessages([initialMessage]);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: 'user', text: `User: ${input}` };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    // Simulate API call to your LLM backend
    const botResponse = await getBotResponse(input);
    const botMessage: Message = { sender: 'bot', text: `LinkLater Tool: ${botResponse}` };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const getBotResponse = async (message: string): Promise<string> => {
    // Replace this mock API call with your actual backend call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`This is a simulated response to: "${message}"`); // Mock response from LLM
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-4/5 min-h-[80vh] bg-white shadow-md rounded-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">Legal Contract Analysis</h1>
        <div className="flex-grow mb-4 overflow-y-auto p-4 border border-gray-300 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                message.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
              }`}
            >
              <span className={`block ${message.sender === 'user' ? 'text-blue-700' : 'text-gray-700'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;

/*

<div className="text-left">
          <h2 className="text-2xl font-semibold mt-4">COVER SHEET</h2>
          <h3 className="text-xl font-semibold mt-4">Key information</h3>
          <p className="mt-2">The document covers the exchange between</p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>SpectraLink Innovations Ltd</strong>: Seller</li>
            <li><strong>QuantumBridge Ventures Ltd</strong>: Buyer</li>
          </ul>
          <p className="mt-2">to acquire</p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Sale Shares</strong> for <strong>£369,250</strong></li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Summary of key dates</h3>
          <p className="mt-2"><strong>Date of agreement:</strong></p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>01 June 2024</strong>: The date of the agreement and the Completion Date.</li>
          </ul>
          <p className="mt-2"><strong>Other key dates:</strong></p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>31 May 2024</strong>: The date the Data Room Index is referenced as of.</li>
            <li><strong>21 July 2024</strong>: The date the Data Room was referenced as of for the flash drive containing the documents.</li>
            <li><strong>Seventh anniversary of Completion</strong>: The deadline for the Buyer to notify the Seller of any claims arising from the warranties or the Tax Covenant.</li>
            <li><strong>24 months following Completion</strong>: The period during which the Seller is restricted from engaging in competing businesses, soliciting customers, or employing certain employees of the Company.</li>
            <li><strong>12 months prior to Completion</strong>: This timeframe relates to the Seller's post-completion restrictions on soliciting customers who were clients of the Company during this period.</li>
            <li><strong>Three months after Completion</strong>: This timeframe relates to the Seller's obligation to ensure that debts owing to the Company are realised in cash.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Summary of termination clause</h3>
          <p className="mt-2">Here are the main termination clauses identified in the legal document:</p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Breach of Warranties</strong>: If the Seller fails to meet the warranties outlined in Schedule 3 (except for those explicitly disclosed), the Buyer can make a claim. The Seller's total liability for all warranty claims is capped at £25,000. The Buyer must notify the Seller of any claim within seven years of the Completion Date, following specific deadlines for different types of claims. Importantly, the Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
            <li><strong>Breach of Tax Covenant</strong>: If the Seller fails to meet the tax covenant outlined in Schedule 4, the Buyer can make a claim. The Seller's liability for tax covenant claims is also capped at £25,000. The Buyer must notify the Seller of any claim within seven years of the Completion Date, following the same notification procedures as for warranty claims. Again, the Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Summary of dispute clause</h3>
          <p className="mt-2">Here are the main dispute clauses identified in the legal document:</p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Governing Law</strong>: This agreement establishes that English law will govern all disputes arising from the agreement, including those not directly related to the contract itself.</li>
            <li><strong>Jurisdiction</strong>: The parties agree that the courts of England and Wales will have the authority to resolve any disagreements, meaning either party can initiate legal action in these courts.</li>
            <li><strong>Notification of Claims</strong>: The agreement emphasises the importance of timely notification of claims, requiring the Buyer to inform the Seller of any issues within seven years of the sale's completion.</li>
            <li><strong>Alternative Dispute Resolution</strong>: While the agreement doesn't mandate specific dispute resolution methods like mediation or arbitration, it acknowledges the possibility for the parties to agree in writing to use alternative methods, including arbitration, if they choose.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Summary of liabilities</h3>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Scope</strong>: The Seller's total liability for all claims arising from the warranties and the tax covenant is capped at £25,000.</li>
            <li><strong>Trigger events</strong>: Claims can be made against the Seller for breaching any of the warranties listed in Schedule 3 or for breaching the tax covenant outlined in Schedule 4.</li>
            <li><strong>Procedure</strong>: The Buyer must notify the Seller in writing of any claim within seven years of the Completion Date, providing a summary of the claim and, as far as possible, an estimated amount claimed.</li>
            <li><strong>Limitations</strong>: The Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Summary of confidentiality</h3>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Confidentiality and announcements</strong>: The Seller and Buyer agree not to disclose the terms of this agreement or any confidential information relating to the Company or the Buyer to any third parties, except for their professional advisors. Neither party is allowed to make public announcements about the agreement without the other party's consent. However, the Buyer can announce the acquisition of the Sale Shares to the employees, clients, customers, or suppliers of the Company after Completion.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Rating for buying conditions</h3>
          <p className="mt-2"><strong>Rating: Standard 🟠</strong></p>
          <p className="mt-2">While the document does include some limitations on the Seller's liability (such as the £25,000 cap), it doesn't offer particularly favourable terms for the Buyer. However, it also doesn't contain any exceptionally unfavourable terms that would make it a "bad deal" for the Buyer.</p>
          <p className="mt-2">Here's why the document is more likely to be classified as <strong>standard</strong> in terms of buying terms:</p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Price and Payment:</strong> The agreement doesn't specify any significant discounts or unusual payment terms. The purchase price is fixed, and payment is made in cash at completion. This is a standard practice in many share purchase agreements.</li>
            <li><strong>Delivery and Shipping:</strong> The document doesn't mention any specific shipping terms or costs, suggesting they are likely standard and negotiated separately.</li>
            <li><strong>Warranties and Returns:</strong> While there are warranties in place, they are fairly typical for this type of transaction. The Buyer has a right to make claims, but there is a cap on the Seller's liability. This is a common approach to limit risk for the Seller.</li>
            <li><strong>Service and Support:</strong> The document doesn't explicitly mention service or support terms. These are likely to be negotiated separately or handled in a separate agreement.</li>
          </ul>
          <p className="mt-2">Overall, this agreement doesn't have any particularly unusual or unfavourable clauses that would make it a significantly "bad" deal for the Buyer. The terms appear to be fairly standard for a share purchase agreement, suggesting a typical market-based transaction.</p>
        </div>
*/

/* 

<div className="text-left p-4">
      <h2 className="text-2xl font-semibold mt-4">COVER SHEET</h2>
      
      <h3 className="text-xl font-semibold mt-4">Key information</h3>
      <p className="mt-2">The document covers the exchange between</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>SpectraLink Innovations Ltd</strong>: Seller</li>
        <li><strong>QuantumBridge Ventures Ltd</strong>: Buyer</li>
      </ul>
      <p className="mt-2">to acquire</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Sale Shares</strong> for <strong>£369,250</strong></li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of key dates</h3>
      <p className="mt-2"><strong>Date of agreement:</strong></p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>01 June 2024</strong>: The date of the agreement and the Completion Date.</li>
      </ul>
      <p className="mt-2"><strong>Other key dates:</strong></p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>31 May 2024</strong>: The date the Data Room Index is referenced as of.</li>
        <li><strong>21 July 2024</strong>: The date the Data Room was referenced as of for the flash drive containing the documents.</li>
        <li><strong>Seventh anniversary of Completion</strong>: The deadline for the Buyer to notify the Seller of any claims arising from the warranties or the Tax Covenant.</li>
        <li><strong>24 months following Completion</strong>: The period during which the Seller is restricted from engaging in competing businesses, soliciting customers, or employing certain employees of the Company.</li>
        <li><strong>12 months prior to Completion</strong>: This timeframe relates to the Seller's post-completion restrictions on soliciting customers who were clients of the Company during this period.</li>
        <li><strong>Three months after Completion</strong>: This timeframe relates to the Seller's obligation to ensure that debts owing to the Company are realised in cash.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of termination clause</h3>
      <p className="mt-2">Here are the main termination clauses identified in the legal document:</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Breach of Warranties</strong>: If the Seller fails to meet the warranties outlined in Schedule 3 (except for those explicitly disclosed), the Buyer can make a claim. The Seller's total liability for all warranty claims is capped at £25,000. The Buyer must notify the Seller of any claim within seven years of the Completion Date, following specific deadlines for different types of claims. Importantly, the Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
        <li><strong>Breach of Tax Covenant</strong>: If the Seller fails to meet the tax covenant outlined in Schedule 4, the Buyer can make a claim. The Seller's liability for tax covenant claims is also capped at £25,000. The Buyer must notify the Seller of any claim within seven years of the Completion Date, following the same notification procedures as for warranty claims. Again, the Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of dispute clause</h3>
      <p className="mt-2">Here are the main dispute clauses identified in the legal document:</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Governing Law</strong>: This agreement establishes that English law will govern all disputes arising from the agreement, including those not directly related to the contract itself.</li>
        <li><strong>Jurisdiction</strong>: The parties agree that the courts of England and Wales will have the authority to resolve any disagreements, meaning either party can initiate legal action in these courts.</li>
        <li><strong>Notification of Claims</strong>: The agreement emphasizes the importance of timely notification of claims, requiring the Buyer to inform the Seller of any issues within seven years of the sale's completion.</li>
        <li><strong>Alternative Dispute Resolution</strong>: While the agreement doesn't mandate specific dispute resolution methods like mediation or arbitration, it acknowledges the possibility for the parties to agree in writing to use alternative methods, including arbitration, if they choose.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Summary of liabilities</h3>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Scope</strong>: The Seller's total liability for all claims arising from the warranties and the tax covenant is capped at £25,000.</li>
        <li><strong>Trigger events</strong>: Claims can be made against the Seller for breaching any of the warranties listed in Schedule 3 or for breaching the tax covenant outlined in Schedule 4.</li>
        <li><strong>Procedure</strong>: The Buyer must notify the Seller in writing of any claim within seven years of the Completion Date, providing a summary of the claim and, as far as possible, an estimated amount claimed.</li>
        <li><strong>Limitations</strong>: The Seller's liability is not limited for claims arising from dishonesty, fraud, wilful misconduct, or wilful concealment.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Summary of confidentiality</h3>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Confidentiality and announcements</strong>: The Seller and Buyer agree not to disclose the terms of this agreement or any confidential information relating to the Company or the Buyer to any third parties, except for their professional advisors. Neither party is allowed to make public announcements about the agreement without the other party's consent. However, the Buyer can announce the acquisition of the Sale Shares to the employees, clients, customers, or suppliers of the Company after Completion.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Rating for selling conditions</h3>
      <p className="mt-2"><strong>Rating: Unfavorable 🔴</strong></p>
      <p className="mt-2">The legal document appears to be unfavorable for the seller due to the limitations placed on their liability and the obligations they are required to fulfill.</p>
      <p className="mt-2">Here's a breakdown:</p>
      <ul className="list-disc ml-5 mt-2">
        <li><strong>Price and Payment:</strong> While the purchase price is fixed, there are no provisions for early payment discounts or other favorable terms for the seller.</li>
        <li><strong>Warranties and Returns:</strong> The Seller is obligated to provide extensive warranties, which could increase their risk and potential costs, especially if there are numerous claims. Additionally, the Seller's liability is capped at £25,000. While this provides some protection, it might be considered a less favorable term compared to a scenario with no liability cap or a higher cap.</li>
        <li><strong>Post-Completion Restrictions:</strong> The Seller is subjected to restrictions for a period of 24 months following completion, which could limit their ability to pursue other business opportunities or compete with the company. These restrictions might be considered unfavorable if they impact the Seller's future business ventures.</li>
      </ul>
      <p className="mt-2">Overall, the agreement places more emphasis on protecting the Buyer's interests with warranties and limitations on the Seller's liability, and the restrictions on the Seller's post-completion activities suggest a less favorable outcome for the seller.</p>
    </div>

*/