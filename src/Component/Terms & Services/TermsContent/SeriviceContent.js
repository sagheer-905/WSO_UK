import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../ContexApi/AuthContext'

function SeriviceContent() {
  const {About,paylater}=useAuth()
  useEffect(()=>{
    paylater()
  })
  return (
    <div>
       {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Term & Services</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}


      {/*---- Page Content Start -----*/}
      <div className="container-fluid fpage_content px-3 px-sm-5 pb-5">
        <h3 className="fw-bold mb-4 text-center">Terms of Service</h3>
      <div dangerouslySetInnerHTML={{__html:About}}></div>

        {/* <h4 className="fw-bold mb-3">Introduction</h4>
        <p>This document (together with any documents referred to in it) tells you the terms and conditions (the
          'Conditions') upon which we will sell the Goods listed on this website (the 'Website') to you.</p>
        <p className="fw-bold">Before confirming your order please:</p>
        <p>Read through these Conditions and in particular our cancellations and returns policy and limitation of
          our liability</p>
        <p>Print a copy for future reference</p>
        <p>Read our privacy policy regarding your personal information</p>
        <p>By ordering any of the Goods listed on this Website, you agree to be legally bound by these Conditions.
          You will be unable to proceed with your transaction if you do not accept these terms and conditions as
          may be modified or amended and posted on this Website from time to time.</p>
        <p>We reserve the right to revise and amend the Website, our disclaimers, and the Conditions at any time
          without notice to you. Your continued use of the Website (or any part thereof) following a change shall
          be deemed to be your acceptance of such change. It is your responsibility to check regularly to
          determine whether we have changed these Conditions.</p>
        <h4 className="fw-bold mb-3">About us</h4>
        <p>This Website is owned and operated by <span className="fw-bold">Europa Fashion (UK) Ltd T/A Wholesale
            Shopping</span> ('we'/'us'/'our'), a
          limited company registered in England and Wales under <span className="fw-bold">company number:
            08395791</span> having our registered
          office at Suite Ro Morgan Reach House, 136 Hagley Road, Birmingham, West Midlands, United Kingdom, B16
          9NX. Our <span className="fw-bold">VAT Number is GB188546653</span>.</p>
        <p>Our <span className="fw-bold">WhatsApp number</span> is <a rel="noreferrer" href="https://wa.me/447482071701" target="_blank">+44 7482 071701</a></p>
        <h4 className="fw-bold mb-3">Communications</h4>
        <p>You agree that email and other electronic communications can be used as a long-distance means of
          communication and acknowledge that all contracts, notices, information, and other communications that we
          provide to you electronically comply with legal requirements.</p>
        <p>We will contact you by email or provide you with information by posting notices on our website.</p>
        <h4 className="fw-bold mb-3">Overseas orders</h4>
        <p>Our website is intended for use by customers resident in England, Wales, Scotland, and Northern Ireland
          (the United Kingdom).</p>
        <p>We do, accept orders from individuals located outside the United Kingdom and ship overseas subject to you
          paying for the additional shipping or postage costs. You will have an opportunity to cancel your order
          in case these costs are not acceptable.</p>
        <p>Please note that when shipping products internationally, you should be aware that cross-border shipments
          are subject to opening and inspection by customs authorities.</p>
        <p>If we agree to supply any goods ordered from the Website for delivery outside the United Kingdom, they
          may be subject to import duties and/or additional taxes or expenses incurred due to complying with
          foreign regulatory requirements or laws. You will be responsible for payment of any such duties and/or
          taxes in addition to our price including VAT and the cost of delivery. Please note that we have no
          control over these charges and cannot predict their amount. Please contact your local customs office or
          taxation authority for further information before placing your order.</p>
        <p>You must comply with all applicable laws and regulations of the country for which the Goods are destined.
          We will not be liable for any breach by you of any such laws.</p>
        <h4 className="fw-bold mb-3">Registration</h4>
        <p>When registering on the Website you must choose a username and password. You are responsible for all
          actions taken under your chosen username and password.</p>
        <p className="fw-bold">By registering on the Website, you undertake:</p>
        <p>That all the details you provide to us to register on the Website and purchase the Goods are true,
          accurate, current, and complete in all respects</p>
        <p>To notify us immediately of any changes to the information provided on registration or to your personal
          information</p>
        <p>That you are over 18 or if under 18 you have a parent or guardian's permission to register with and
          purchase the Goods from this Website in conjunction with and under their supervision</p>
        <p>To only use the Website using your username and password</p>
        <p>To make every effort to keep your password safe</p>
        <p>Not to disclose your password to anyone</p>
        <p>To change your password immediately upon discovering that it has been compromised</p>
        <p>To neither transfer nor sell your username or password to anyone, nor permit, either directly or
          indirectly, anyone other than you to use them</p>
        <p>You authorize us to transmit your name, address and other personal information supplied by you (including
          updated information) to obtain information from third parties about you, including, but not limited to,
          credit reports and so that we may authenticate your identity.</p>
        <h4 className="fw-bold mb-3">Eligibility to purchase from the Website</h4>
        <p>To be eligible to purchase the Goods on this Website and lawfully enter and form contracts with us, you
          must:</p>
        <p>Be 18 years of age or over</p>
        <p>Be legally capable of entering into a binding contract</p>
        <p>Provide full details of a delivery address in the United Kingdom or the European Economic Area (if you
          reside in the EEA)</p>
        <p>If you are under 18, you may only use the Website in conjunction with, and under the supervision of, a
          parent or guardian. If you do not qualify, you must not use our website.</p>
        <h4 className="fw-bold mb-3">Price</h4>
        <p>The prices of the Goods are quoted on the Website.</p>
        <p>Delivery prices are quoted for delivery in the United Kingdom unless otherwise specified./p&gt;
        </p><p>Unless otherwise stated, the prices quoted exclude VAT and delivery costs (in the case of goods)
          which will be added to the total amount due from you. Details of our delivery charges can be located
          on our website.</p>
        <p>We reserve the right, by giving notice to you at any time before delivery or performance of our
          obligations, to increase the price of the Goods to reflect any increase in the cost to us due to any
          factor beyond our control (such as without limitation, any foreign exchange fluctuation, the
          significant increase in the costs of labour, materials or other costs of manufacture).</p>
        <h4 className="fw-bold mb-3">Payment</h4>
        <p>Payment can be made by any major credit, debit card or electronic payment account as explained on the
          order form. We also offer payment via bank transfer and PayPal.</p>
        <p>By placing an order, you consent to payment being charged to your debit or credit card account or
          electronic payment account as provided on the order form.</p>
        <p>Payment will be debited and cleared from your account before the dispatch of the Goods to you.</p>
        <p>When you pay for your order by card, we carry out certain checks which include obtaining
          authorisation from your card issuer to ensure you have adequate funds and for security reasons. This
          may involve validating your name, address and other personal information supplied by you during the
          order process against appropriate third-party databases including the card issuer, registered credit
          reference agencies and fraud prevention agencies.</p>
        <p className="fw-bold">By accepting these Conditions, You:</p>
        <p>Undertake that all the details you provide to us to purchase the Goods are correct and that the
          payment card you are using is your own and that there are sufficient funds to cover the cost of the
          goods ordered.</p>
        <p>Undertake that any Goods ordered by you are for your own private or domestic use only.</p>
        <p>Authorize us to transmit the payment and delivery information provided by you during the order
          process (included any updated information) to obtain authorization from your card issuer to ensure
          you have adequate funds, to authenticate your identity, to validate your payment card and for other
          security reasons, such as fraud prevention.</p>
        <p>We shall contact you should any problems occur with the authorization of your card.</p>
        <p>We will take all reasonable care, in so far as it is in our power to do so, to keep the details of
          your order and payment secure, but in the absence of negligence on our part, we cannot be held
          liable for any loss you may suffer if a third party procures unauthorized access to any data you
          provide when accessing or ordering from our website.</p>
        <h4 className="fw-bold mb-3">Order Process and Formation of a Contract</h4>
        <p>All orders are subject to acceptance and availability. If any Goods ordered are not available, you
          will be notified by email and you will have the option either to wait until the item is available or
          to cancel your order. It is your responsibility to provide us with a valid email address so that we
          can contact you if necessary.</p>
        <p className="fw-bold">Any order placed by you constitutes an offer to purchase the Goods from us.</p>
        <p>All such offers received from you are subject to acceptance by us and we reserve the right to refuse
          any order placed by you at any time before acceptance, without explaining.</p>
        <p>You shall be responsible for ensuring the accuracy of the details provided by you during the order
          process and we will not accept an order unless all details requested from you have been entered
          correctly.</p>
        <p>You agree that if we contact you to acknowledge receipt of your order such communication shall not
          amount to our acceptance of your offer to purchase the Goods ordered by you from the Website.</p>
        <p>A contract between you and us (the 'Contract') incorporating these Conditions will only subsist after
          we have debited your payment card and have confirmed that we have dispatched the Goods. We will send
          you an email to confirm this (a 'Confirmation Notice'). The Confirmation Notice will amount to an
          acceptance of your offer to purchase from us. The Contract will be formed when we send you the
          Confirmation Notice (whether or not you receive it).</p>
        <p>The Contract will relate only to the Goods stated in the Confirmation Notice. We will not be obliged
          to supply any other Goods which may have been part of your order until we have sent you a separate
          Confirmation Notice relating to it.</p>
        <p>You must check that the details contained in the Confirmation Notice are correct and you should print
          out and keep a copy of it.</p>
        <p className="fw-bold">You will be subject to the version of our policies and Conditions in force at
          the time that you order the Goods from us, unless:</p>
        <p>Any change to those policies or these Conditions is required to be made by law or governmental
          authority</p>
        <p>We notify you of any change to our policies or these Conditions before we send you the Confirmation
          Notice, in which case, we are entitled to assume that you have accepted it unless we receive written
          notification from you to the contrary within seven calendar days of receipt of the confirmation
          notice</p>
        <h4 className="fw-bold mb-3">Delivery</h4>
        <p>The Goods will be delivered to you at the address you provided during the order process. </p>
        <p>We employ professional carriers. Nevertheless, you must examine the Goods on arrival. If you are
          asked for your signature on delivery, you must examine the Goods before signing for them.</p>
        <p>All goods must be signed for by an adult aged 18 years or over on delivery.</p>
        <p>Any dates quoted for delivery of the Goods are approximate only. If no date is specified, then it
          will take place within 30 days of the date of the Confirmation Notice unless there are exceptional
          circumstances.</p>
        <p>We will not be liable for any delay in delivering the Goods, however, caused.</p>
        <p>The Goods may be provided in instalments.</p>
        <p>For Christmas deliveries, we recommend that you check our website for the last date of delivery. We
          will endeavour to dispatch all Goods that are in stock within 24 hours. However, we cannot guarantee
          delivery by 24th December.</p>
        <h4 className="fw-bold mb-3">Risk and Title</h4>
        <p>The Goods will be at your risk from the time of delivery.</p>
        <p>Ownership of the Goods will only pass to you when we receive full payment of all sums due in respect
          of them including VAT and the cost of delivery.</p>
        <h4 className="fw-bold mb-3">Return of Goods</h4>
        <p>Upon receiving notice, we will contact you and provide details of where you must return the Goods and
          other relevant instructions. You must then return the Goods to us without delay and at the latest
          within 14 calendar days for UK orders and 14 days for international orders of notifying us of your
          cancellation.</p>
        <p>You must return the Goods at your own risk and your own cost unless we offer to pay the cost of
          return. We reserve the right, at our option, to collect the Goods from you. If we wish to collect
          the Goods, we will notify you of when we will collect them. We may charge you for the cost of
          collecting the Goods and may deduct this from any sum owed by us to you.</p>
        <p>You must return the goods to us in the same condition in which you received them with the original
          packaging and the original invoice.</p>
        <p>If the value of the Goods is reduced because you handle them beyond what is necessary to determine
          the nature, characteristics or functioning of the Goods, we will be entitled to claim this reduction
          in value from you and to deduct it from any money which you have paid us.</p>
        <p><span className="fw-bold">WE DO NOT ACCEPT RETURNS ON SALE GOODS UNLESS FAULTY.</span> If faulty, please
          refer to our standard return policy as stated above.</p>
        <h4 className="fw-bold mb-3">Delivery by Instalments</h4>
        <p>The Goods may be sent to you in instalments. You may cancel the outstanding part of your order and
          receive a refund of the balance of the price and any standard delivery costs you paid to us in
          respect of the outstanding part of your order.</p>
        <h4 className="fw-bold mb-3">Complaints </h4>
        <p>If you have a comment, concern, or complaint about any Goods you have purchased from us, please
          contact us via email at sales@wholesaleshopping.co.uk OR by post at </p>
        <ul className="list-unstyled">
          <li><span className="fw-bold">Wholesale Shopping</span></li>
          <li>36C Broughton Street,</li>
          <li>M8 8NN, Manchester,</li>
          <li>United Kingdom</li>
        </ul>
        <h4 className="fw-bold mb-3">Intellectual Property</h4>
        <p>Goods sold or licensed by us and Website content is subject to copyright, trademark or other
          intellectual property rights in favour of third parties. We acknowledge those rights.</p>
        <p>The content of the Website is protected by copyright (including design copyrights), trademarks,
          patent, database and other intellectual property rights and similar proprietary rights which include
          (without limitation), all rights in materials, works, techniques, computer programs, source codes,
          data, technical information, trading business brand names, goodwill, service marks, utility models,
          semiconductor topography rights, the style of presentation of the goods or services, creations,
          inventions or improvements upon or additions to an invention, confidential information, know-how and
          any research effort relating to Wholesale Shopping moral rights and any similar rights in any
          country (whether registered or unregistered and including applications for and the right to apply
          for them in any part of the world) and you acknowledge that the intellectual property rights in the
          material and content supplied as part of the Website shall remain with us or our licensors.</p>
        <p>You acknowledge that any other use of the material and content of this Website is strictly
          prohibited, and you agree not to (and agree not to assist or facilitate any third party to) copy,
          reproduce, transmit, publish, display, distribute, commercially exploit or create derivative works
          from such material and content.</p>
        <p>No licence is granted to you in these Conditions to use any of our trademarks or those of our
          affiliated companies.</p>
        <h4 className="fw-bold mb-3">Website Use</h4>
        <p>You are permitted to use the Website and the material contained in it only as expressly authorized by
          us under our terms of use.</p>
        <h4 className="fw-bold mb-3">Liability and indemnity</h4>
        <p>Notwithstanding any other provision in the Conditions, nothing will affect or limit your statutory
          rights; or will exclude or limit our liability for:</p>
        <p>Death or personal injury resulting from our negligence</p>
        <p>Fraud or fraudulent misrepresentation</p>
        <p>Action under section 2(3) of the Consumer Protection Act 1987</p>
        <p>Any matter for which it would be unlawful for us to exclude or attempt to exclude our liability</p>
        <p>The Website is provided on an 'as is' and 'as available basis without any representation or
          endorsement made and we make no warranties or guarantees, whether express or implied, statutory or
          otherwise (unless otherwise expressly stated in these Conditions or required by law) about the
          information, materials, content or services found or offered on the Website for any particular
          purpose or any transaction that may be conducted on or through the Website including but not limited
          to implied warranties of non-infringement, compatibility, timeliness, performance, security,
          accuracy, condition or completeness, or any implied warranty arising from course of dealing or usage
          or trade custom.</p>
        <p className="fw-bold">We will not be liable if the Website is unavailable at any time.</p>
        <p>We make no representation or warranty of any kind express or implied statutory or otherwise regarding
          the availability of the Website or that it will be timely or error-free, that defects will be
          corrected, or that the Website or the server that makes it available are free of viruses or bugs.
        </p>
        <p>We will not be responsible or liable to you for any loss of content or material uploaded or
          transmitted through the Website and we accept no liability of any kind for any loss or damage
          resulting from action taken in reliance on material or information contained on the Website.</p>
        <p>We cannot guarantee and cannot be responsible for the security or privacy of the Website and any
          information provided by you. You must bear the risk associated with the use of the internet. In
          particular, we will not be liable for any damage or loss caused by a distributed denial-of-service
          attack, any viruses, Trojans, worms, logic bombs, keystroke loggers, spyware, adware or other
          material which is malicious or technologically harmful that may infect your computer, peripheral
          computer equipment, computer programs, data or other proprietary material as a result of your use of
          the Website or as a result of your downloading, streaming or otherwise accessing any Digital Content
          supplied on the Website or from any website linked to it.</p>
        <p>We will use all reasonable endeavours to carry out our obligations within a reasonable period but
          will not be liable to you for any loss, costs or expenses arising directly or indirectly from any
          delays in doing so.</p>
        <p className="fw-bold">We will not be liable, in contract or tort (including, without limitation,
          negligence), or respect of pre-contract or other representations (other than fraudulent
          misrepresentations) or otherwise for:</p>
        <ul className="list-unstyled">
          <p>any economic losses (including without limitation loss of revenues, profits, contracts, business
            or anticipated savings and any loss related to your business, the extent of which was not
            foreseeable at the time of the contract); or</p>
          <p>any loss of goodwill or reputation; or</p>
          <p>any special losses or losses not normally reasonably foreseeable at the time of the contract; or
          </p>
          <p>any loss of data; or</p>
          <p>wasted management or office time; or</p>
          <p>any other loss or damage of any kind suffered or incurred arising out of or in connection with
            the provision of any matter under these Conditions and/or the Contract and/or the use of this
            Website or any aspect related to your agreement to purchase the Goods even if such losses are
            foreseeable or result from a deliberate breach of these Conditions by us that would entitle you
            to terminate the Contract between us or as a result of any action we have taken in response to
            your breach of these Conditions. Without prejudice to the terms of this clause and if we are
            unable to rely upon it, our liability for all and any losses you suffer because of us breaking
            the Contract, whether deliberate, including those listed in clauses 17.8.1 to 17.8.6, is
            strictly limited to the total of the price of and any delivery charges you paid for the Goods.
          </p>
        </ul>
        <p>You agree to fully indemnify, defend and hold us, and our officers, directors, employees and
          suppliers, harmless immediately on demand, from and against all claims, including but not limited to
          losses (including loss of profit, revenue, goodwill or reputation), costs and expenses, including
          reasonable administrative and legal costs, arising out of any breach of these Conditions by you, or
          any other liabilities arising out of your use of this Website or any other person accessing the
          Website using your personal information with your authority.</p>
        <p className="fw-bold">This clause does not affect your statutory rights as a consumer, nor does it affect
          your contractual cancellation rights.</p>
        <h4 className="fw-bold mb-3">GDPR Compliance</h4>
        <p>The new General Data Protection Regulation will be applicable starting on May 25, 2018. The changes
          will have an impact on our automatic review collection feature, too.</p>
        <p>Until now, this feature was automatically activated by default in the backend at the time of
          registering with Trustpilot. This means that the Trustpilot integrated into your online shop
          automatically collects the e-mail addresses of all your customers and sends them a review reminder.
          To do so, you are obliged to obtain your customers’ consent.</p>
        <p>As of May 25, 2018, data protection must be guaranteed also by default, which means that the
          automatic activation of this feature doesn’t meet the requirements of the new General Data
          Protection Regulation. Products must be designed in such a way that, by default, they collect as
          little personal data as possible and guarantee data protection by default.</p>
        <h4 className="fw-bold mb-3">Reviews</h4>
        <p>You acknowledge that any review, feedback, or rating which you leave may be published by us on the
          Website and you agree that it may be displayed for as long as we consider appropriate and that the
          content may be syndicated to our other websites, publications, or marketing materials.</p>
        <p className="fw-bold">You undertake that any review, feedback, or rating that you write shall:</p>
        <p>Comply with applicable law in the UK and the law in any country from which they are posted</p>
        <p>Be factually accurate</p>
        <p>Contain genuinely held opinions (where applicable)</p>
        <p>Not contain any material which is either defamatory, threatening, obscene, abusive, offensive,
          hateful, inflammatory or is likely to harass, upset, annoy, alarm, embarrass or invade the privacy
          of, any person or be deceiving</p>
        <p>Not promote or advocate an unlawful act or activity, discrimination, sexually explicit material, or
          violence</p>
        <p>Not infringe any trademark, copyright (including design rights), database right, or other
          intellectual property rights of any other person or breach of any legal duty you owe to a third
          party</p>
        <p>Not be used to impersonate any person, or to misrepresent your identity</p>
        <p>You agree to indemnify and hold us harmless against any claim or action brought by third parties,
          arising out of or in connection with any review, feedback or rating posted by you on the Website,
          including, without limitation, the violation of their privacy, defamatory statements, or
          infringement of intellectual property rights.</p>
        <p>You grant us and our affiliate companies a non-exclusive, royalty-free worldwide license to use or
          edit any reviews posted by you.</p>
        <p>We reserve the right to publish, edit or remove any reviews without notifying you.</p>
        <h4 className="fw-bold mb-3">Termination</h4>
        <p className="fw-bold">We reserve the right to terminate an agreement formed with you and to suspend or
          terminate your access to the Website immediately and without notice to you if:</p>
        <p>You fail to make any payment to us when due</p>
        <p>You breach these Conditions (repeatedly or otherwise)</p>
        <p>You are impersonating any other person or entity</p>
        <p>When requested by us to do so, you fail to provide us within a reasonable time with sufficient
          information to enable us to determine the accuracy and validity of any information supplied by you
          or your identity</p>
        <p>We suspect you have engaged, or are about to engage, or have in any way been involved, in fraudulent
          or illegal activity on the website</p>
        <h4 className="fw-bold mb-3">Events Outside Our Control</h4>
        <p>Except for our obligations, we shall have no liability for delays or failures in delivery or
          performance of our obligations to you resulting from any act, event, omission, failure, or accident
          outside of our control ('Event outside Our Control'), which, without limitation, includes:</p>
        <p>A strike, lock-out or other industrial action</p>
        <p>Shortages of labour, fuel, power, raw materials where we could not take reasonable action to obtain
          alternative supplies in time to perform this contract</p>
        <p>Late, defective performance or non-performance by suppliers where we could not by taking reasonable
          action obtain alternative supplies in time to perform this contract</p>
        <p>Private or public telecommunication, computer network failures or breakdown of equipment</p>
        <p>Civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether
          declared or not) or threat or preparation for war</p>
        <p>Fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster or extreme
          weather conditions</p>
        <p>Impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or
          private transport</p>
        <p>Acts, decrees, legislation, regulations, or restrictions of any government</p>
        <p>Other events, beyond our reasonable control</p>
        <p>Our performance will be deemed to be suspended for the period that the Event Outside Our Control
          continues, and we will have an extension of time for performance for the duration of that period. We
          will use reasonable endeavours to minimize any delay caused by the Event outside our control or to
          find a solution by which our obligations may be performed despite this event. We shall promptly
          notify you of any event outside Our Control giving details of it and (where possible) the extent and
          likely duration of any delay.</p>
        <p>Where an event outside Our Control prevents us from performing our obligations to you within 25 days
          from the date we sent you the Confirmation Notice, either you or we may terminate the Contract by
          giving 5 days written notice to the other.</p>
        <p>The Contract will terminate 5 days after service of this written notice of termination unless you
          notify us in writing before the expiry of those 5 days that you will extend the time for performance
          of this Contract to a specified date.</p>
        <p>If the event outside Our Control prevents us from performing our obligations to you by the date to
          which you specified, the contract will terminate on the date you specified.</p>
        <p>If the contract is terminated due to an event outside Our Control, we will refund you any money you
          have paid to us under the Contract.</p>
        <h4 className="fw-bold mb-3">Privacy Policy</h4>
        <p>To monitor and improve customer service, we sometimes record telephone calls.</p>
        <p>We shall be entitled to process your data following the terms of our Privacy Policy. Please view this
          document for further information. All information provided by you will be treated securely and by
          the Data Protection Act 1998 (as amended).</p>
        <p>You can find full details of our Privacy Policy on the Website.</p>
        <h4 className="fw-bold mb-3">Shopify</h4>
        <p>Our store is hosted on Shopify Inc. They provide us with an online e-commerce platform that allows us
          to sell our products and services to you.</p>
        <p>Your data is stored through Shopify's data storage, databases, and the general Shopify application.
          They store your data on a secure server behind a firewall.</p>
        <p><span className="fw-bold">Wholesale Shopping</span> does not store credit card details, nor do we share
          customer details with any 3rd parties.</p>
        <h4 className="fw-bold mb-3">Third-Party Rights</h4>
        <p>Except for our affiliates, directors, employees or representatives, a person who is not a party to
          the Contract has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any term
          of the Contract, but this does not affect any right or remedy of a third party that exists or is
          available apart from that Act.</p>
        <h4 className="fw-bold mb-3">External Links</h4>
        <p>To provide increased value and convenience to our users, we may provide links to other websites or
          resources for you to access at your sole discretion and risk. You acknowledge and agree that, as you
          have chosen to enter the linked website, we are not responsible for the availability of such
          external sites or resources, and do not review or endorse and are not responsible or liable in any
          way, whether directly or indirectly, for:</p>
        <p>The privacy practices of such websites</p>
        <p>The content of such websites, including (without limitation) any advertising, content, products,
          goods or other materials or services on or available from such websites or resources</p>
        <p>The use which others make of these websites; or any damage, loss or offence caused or alleged to be
          caused to you, arising from or in connection with the use of or reliance upon any such advertising,
          content, products, goods, materials, or services available on and/or purchased by you from such
          external websites or resources</p>
        <h4 className="fw-bold mb-3">Linking to the Website</h4>
        <p>You must not create a link to the Website from another website, document, or any other source without
          first obtaining our prior written consent.</p>
        <p className="fw-bold">Any agreed link must be:</p>
        <p>To the Website's homepage</p>
        <p>Established from a website or document that is owned by you and does not contain content that is
          offensive, controversial, infringes any intellectual property rights or other rights of any other
          person or does not comply in any way with the law in the UK and the law in any country from which it
          is hosted</p>
        <p>Provided in such a way that is fair and legal and does not damage our reputation or take advantage of
          it</p>
        <p>Established in such a way that does not suggest any form of association, approval or endorsement on
          our part where none exists</p>
        <p>We have no obligation to inform you if the address of the Website home page changes and it is your
          responsibility to ensure that any link you provide to our homepage is always accurate.</p>
        <p>We reserve the right to withdraw our consent without notice and without providing any reasons for
          withdrawal. Upon receiving such notice you must immediately remove the link and inform us once this
          has been done.</p>
        <h4 className="fw-bold mb-3">Notices</h4>
        <p>All notices given by you to us must be given to us at sales@wholesaleshopping.co.uk or a letter to
        </p>
        <ul className="list-unstyled">
          <li className="fw-bold">Wholesale Shopping</li>
          <li>36C Broughton Street,</li>
          <li>M8 8NN, Manchester,</li>
          <li>United Kingdom</li>
        </ul>
        <p>We may give notice as described in clause 3.</p>
        <p>Notice will be deemed received and properly served immediately when posted on our website, 24 hours
          after an email is sent, or three days after the date of posting of any letter. In proving the
          service of any notice, it will be sufficient to prove, in the case of a letter, that such letter was
          properly addressed, stamped, and placed in the post and, in the case of an email that such email was
          sent to the specified email address of the addressee.</p>
        <h4 className="fw-bold mb-3">Entire Agreement</h4>
        <p>The contract represents the entire agreement between us about the subject matter of the Contract and
          supersedes any prior agreement, understanding or arrangement between us, whether oral or in writing.
        </p>
        <p>We each acknowledge that, in entering a contract, neither of us has relied on any express or implied
          representation, undertaking or promise given by the other from anything said or written in any
          negotiations between us before such Contract except as has been expressly incorporated in such
          Contract.</p>
        <p>Neither of us shall have any remedy in respect of any untrue statement made by the other, whether
          orally or in writing, before the date of any Contract (unless such untrue statement was made
          fraudulently) and the other party's only remedy shall be for breach of contract as provided in these
          conditions.</p>
        <h4 className="fw-bold mb-3">General</h4>
        <p>We reserve the right to change the domain address of this website and any services, products, product
          prices, product specifications and availability at any time.</p>
        <p>All prices and descriptions supersede all previous publications. All product descriptions are
          approximate.</p>
        <p>Every effort is made to keep information regarding stock availability on the Website up to date.
          However, we do not guarantee that this is the case, or that stock will always be available.</p>
        <p>If any provision of these terms and conditions is held by any competent authority to be invalid or
          unenforceable in whole or in part, the validity of the other provisions of the Contract and the
          remainder of the provision in question will not be affected.</p>
        <p>All Contracts are concluded and available in English only.</p>
        <p>If we fail, at any time during the term of a contract, to insist upon strict performance of any of
          your obligations under it or any of these terms and conditions, or if we fail to exercise any of the
          rights or remedies to which we are entitled under the Contract, this shall not constitute a waiver
          of such rights or remedies and shall not relieve you from compliance with your obligations.</p>
        <p>A waiver by us of any default shall not constitute a waiver of any subsequent default.</p>
        <p>No waiver by us of any of these conditions or any other term of a contract shall be effective unless
          it is expressly stated to be a waiver and is communicated to you in writing by clause 3</p>
        <p>Any contract between you and us is binding on you and us and our respective successors and assigns.
          You may not transfer, assign, charge or otherwise dispose of the Contract, or any of your rights or
          obligations arising under it, without our prior written consent. We may transfer, assign, charge,
          sub-contract or otherwise dispose of a Contract, or any of our rights or obligations arising under
          it, at any time during the term of the contract.</p>
        <h4 className="fw-bold mb-3">Governing Law and Jurisdiction</h4>
        <p>The Website is controlled and operated in the United Kingdom. Every purchase you make shall be deemed
          performed in England and Wales.</p>
        <p>The Conditions and any Contract brought into being because of usage of this Website will be governed
          by the laws of England and Wales and you irrevocably agree to submit to the exclusive jurisdiction
          of the courts of England and Wales.</p>
        <h4 className="fw-bold mb-3">Privacy Policies &amp; Cookies</h4>
        <p>This privacy policy sets out how wholesaleshopping.co.uk uses and protects any information that you
          give us when you use this website. We are committed to ensuring that your privacy is protected.
          Should we ask you to provide certain information by which you can be identified when using this
          website, then you can be assured that it will only be used by this privacy statement? We may change
          this policy from time to time by updating this page. You should check this page from time to time to
          ensure that you are happy with any changes.</p>
        <h4 className="fw-bold mb-3">What We Collect</h4>
        <p>We may collect the following information:</p>
        <p>Customer name</p>
        <p>Contact information including email address</p>
        <p>Other information relevant to customers and offers</p>
        <p>For the exhaustive list of cookies, we collect see the List of cookies we collect section</p>
        <h4 className="fw-bold mb-3">What We Do with the Information We Gather</h4>
        <p>We require this information to understand your needs and provide you with a better service, and for
          the following reasons:</p>
        <p>Internal record keeping.</p>
        <p>We may use the information to improve our products and services.</p>
        <p>We may periodically send promotional emails about new products, special offers or other information
          which we think you may find interesting using the email address which you have provided.</p>
        <p>From time to time, we may also use your information to contact you for market research purposes. We
          may contact you by email, phone, fax, or mail. We may use the information to customize the website
          according to your interests.</p>
        <h4 className="fw-bold mb-3">Security</h4>
        <p>We are committed to ensuring that your information is secure. To prevent unauthorized access or
          disclosure, we have put in place suitable physical, electronic and managerial procedures to
          safeguard and secure the information we collect online.</p>
        <h4 className="fw-bold mb-3">How We Use Cookies</h4>
        <p>A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you
          agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a
          particular site. Cookies allow web applications to respond to you as an individual. The web
          application can tailor its operations to your needs, likes and dislikes by gathering and remembering
          information about your preferences.</p>
        <p>We use traffic log cookies to identify which pages are being used. This helps us analyze data about
          web page traffic and improve our website to tailor it to customer needs. We only use this
          information for statistical analysis purposes and then the data is removed from the system.</p>
        <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you
          find useful and which you do not. A cookie in no way gives us access to your computer or any
          information about you, other than the data you choose to share with us. You can choose to accept or
          decline cookies. Most web browsers automatically accept cookies, but you can usually modify your
          browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of
          the website.</p>
        <h4 className="fw-bold mb-3">Links to Other Websites</h4>
        <p>Our website may contain links to other websites of interest. However, once you have used these links
          to leave our site, you should note that we do not have any control over that other website.
          Therefore, we cannot be responsible for the protection and privacy of any information which you
          provide whilst visiting such sites and such sites are not governed by this privacy statement. You
          should exercise caution and look at the privacy statement applicable to the website in question.</p>
        <h4 className="fw-bold mb-3">List of Cookies We Collect</h4>
        <p>The table below lists the cookies we collect and what information they store:</p>
        <table className="table text-center table-bordered mb-4">
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Cookie Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CART</td>
              <td>The association with your shopping cart.</td>
            </tr>
            <tr>
              <td>CATEGORY INFO</td>
              <td>Stores the category info on the page that allows displaying pages more quickly.</td>
            </tr>
            <tr>
              <td>COMPARE</td>
              <td>The items that you have in the Compare Products list.</td>
            </tr>
            <tr>
              <td>CURRENCY</td>
              <td>Your preferred currency.</td>
            </tr>
          </tbody>
        </table>
        <h4 className="fw-bold mb-3">Security &amp; Privacy</h4>
        <h5 className="fw-bold mb-3">Forgotten Password</h5>
        <p>If you've forgotten your password, just enter your email address on the forgotten your password page.
          You will then receive an email containing a link to reset your password.</p>
        <h5 className="fw-bold mb-3">Your Privacy</h5>
        <p>Your privacy is of the highest importance to us, and we promise never to release your details to any
          outside company for mailing or marketing purposes.</p>
        <p>When you purchase from our website, we collect certain personal information from you (for example
          your name, email address, payment address and details). All such information is held on secure
          servers. Wholesaleshopping.co.uk complies fully with all applicable Data Protection and consumer
          legislation and will treat all your personal information as fully confidential.</p>
        <p>To serve you best, we use Barclaycard, Stripe, and PayPal to process credit card transactions and
          order fulfilment. They receive the information needed to verify and authorize your payment card and
          to process your order. All such organizations are under strict obligation to keep your personal
          information private.</p>
        <h5 className="fw-bold mb-3">Transaction Security</h5>
        <p>Security and privacy of personal details are taken very seriously at wholesaleshopping.co.uk. We
          maintain the highest level of security and our site uses SSL encryption technology. You can tell
          whether a page is secure as 'HTTPS' will replace the 'HTTP' at the front of the
          www.wholesaleshopping.co.uk in your browser address window. A small, locked padlock will also appear
          in the bottom bar of your browser window.</p>
        <p>To serve you best, we use Barclaycard, Stripe and PayPal to process credit card transactions and
          order fulfilment. They receive the information needed to verify and authorize your payment card and
          to process your order. All such organizations are under strict obligation to keep your personal
          information private. In addition, we use 3D Secure services, Verified by Visa, and MasterCard Secure
          Code. To use this service, you must first register with the bank or other organization that issued
          your card.</p>
        <h5 className="fw-bold mb-3">Phishing</h5>
        <p>Phishing is the practice of tricking someone into giving confidential information. Examples include
          falsely claiming to be a legitimate company when sending an e-mail to a user, in an attempt to get
          the user to send private information that will be used for identity theft and fraud. We'll never ask
          you to send any personal details via email. If we require such details, for security reasons we'll
          ask you to contact us by phone. Should you receive an email claiming to be from
          wholesaleshopping.co.uk requesting this kind of information, please do not respond but let us know?
        </p>
        <h4 className="fw-bold mb-3">Cookies</h4>
        <p>Cookies are tiny text files stored on your computer when you visit certain web pages.
          Wholesaleshopping.co.uk uses cookies to keep track of what you have in your basket and to remember
          you when you return to our site. To shop at wholesaleshopping.co.uk you need to have all cookies
          enabled, though you can still use the website for browsing and research purposes without them.</p>
        <h4 className="fw-bold mb-3">Image Copyright</h4>
        <p>Our images, Videos &amp; Contents are protected by <span className="fw-bold">Copyright Law</span> to <span className="fw-bold">Wholesale Shopping</span>. We do not authorize permission to use our trademark
          which is an offence against section 92 of the Trademarks Acts 1994. images, Videos &amp; Contents are
          not available for purchase with or of any of our products and we will proceed with legal action if
          we have any reason to believe our copyright is in breach.</p>
        <h4 className="fw-bold mb-3">Returns</h4>
        <p>Damages, discrepancies &amp; returns must be notified to us within 2 days of receiving goods by e-mail to
          sales@wholesaleshopping.co.uk, quoting your order number, name, address, description of the product
          and reason for sending back. In the case of damages, a photo of the fault should also be provided.
          Should you wish to return a faulty item/s, please ensure you return it in its original condition,
          within 14 days of receiving it? Once we have received your returned item/s, it will be refunded,
          exchanged, or credited towards your next order. We will not be able to accept any items which might
          have been damaged by mishandling, during customization or alteration.</p>
        <p>Please note that colours may sometimes vary because of the photographic studio or monitor
          calibration. Garments are measured on a flat surface and all measurements are approximate.</p>
        <h4 className="fw-bold mb-3">Sale</h4>
        <p>Please note that sale prices are exclusive to online purchases only and our offers will not be
          available at our warehouse. These promotions change frequently and may not be available at this
          price once the offer has expired. Offers are subject to stock availability.</p> */}
      </div>
      {/*---- Page Content End -----*/}

    </div>
  )
}

export default SeriviceContent

