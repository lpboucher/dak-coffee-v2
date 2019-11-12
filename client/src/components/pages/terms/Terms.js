import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import Hero from '../../presentation/global/Hero';
import NewsletterContainer from '../../containers/newsletter/NewsletterContainer';

import { Box, Markdown } from 'grommet'

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565896327/Heros/HeaderV2_gujmqi.jpg';

const Terms = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
        <>
            { isNotSmall &&
           <Hero
                bgImage={header}
                height="90vh"
                overlay={{
                    text: 'GENERAL TERMS AND CONDITIONS Dak Coffee Roasters',
                    loc: "center",
                    height: "25vh"
                }}
            />
            }
            <Box width="80%" margin={{horizontal: "auto", bottom: "-20vh"}} pad="xlarge" background="lightGrey" style={{transform: "translate(0,-40vh)"}}>
                <Markdown>{CONTENT}</Markdown>
            </Box>
            <NewsletterContainer /> 
        </>
    );
};

export default withResponsive(Terms);

const CONTENT = `
# Definitions

1. Dak Coffee Roasters: Dak Coffee Roasters, established in Kribbestraat 54-3, Chamber of Commerce no. 73670405.
2. Customer: the person with whom Dak Coffee Roasters has entered into an agreement.
3. Parties: Dak Coffee Roasters and customer together.
4. Consumer: a customer who is an individual acting for private purposes.

# Applicability

1. These terms and conditions will apply to all quotations, offers, activities, orders, agreements and deliveries of services or products by or on behalf of Dak Coffee Roasters.  
2. Parties can only deviate from these conditions if they have explicitly agreed upon in writing.
3. The parties expressly exclude the applicability of supplementary and/or deviating general terms and conditions of the customer or of third parties.

# Prices

1. All prices used by Dak Coffee Roasters are in euros or Canadian dollars, are inclusive of sales tax (VAT, GST) and exclusive of any other costs such as administration costs, levies and travel-, shipping- or transport expenses, unless expressly stated otherwise or agreed otherwise.
2. Dak Coffee Roasters is entitled to adjust all prices for its products or services, shown in its shop, on its website or otherwise, at any time. 
3. Increases in the cost prices of products or parts thereof, which Dak Coffee Roasters could not foresee at the time of making an offer or the conclusion of the agreement, may give rise to price increases. 
4. The consumer has the right to terminate an agreement as a result of a price increase as referred to in paragraph 3, unless the increase is the result of statutory regulation.

# Samples / models

If the customer has received a sample or model of a product, he can not derive any rights from this other than that it is an indication of the nature of the product, unless the parties have explicitly agreed that the products be supplied conform to the sample or model.

# Consequences of late payment

1. If the customer does not pay within the agreed term, Dak Coffee Roasters is entitled to charge an interest of 1% per month from the day the customer is in default, whereby a part of a month is counted for a whole month.
2. When the customer is in default, he is also due to extrajudicial collection costs and may be obliged to pay any compensation to Dak Coffee Roasters. 
3. The collection costs are calculated on the basis of the Reimbursement for extrajudicial collection costs. 
4. If the customer does not pay on time, Dak Coffee Roasters may suspend its obligations until the customer has met his payment obligation. 
5. In the event of liquidation, bankruptcy, attachment or suspension of payment on behalf of the customer, the claims of Dak Coffee Roasters on the customer are immediately due and payable. 
6. If the customer refuses to cooperate with the performance of the agreement by Dak Coffee Roasters, he is still obliged to pay the agreed price to Dak Coffee Roasters.

# Right of recovery of goods

1. As soon as the customer is in default, Dak Coffee Roasters is entitled to invoke the right of recovery with regard to the unpaid products delivered to the customer.
2. Dak Coffee Roasters invokes the right of recovery by means of a written or electronic announcement.
3. As soon as the customer has been informed of the claimed right of recovery, the customer must immediately return the products concerned to Dak Coffee Roasters, unless the parties agree to make other arrangements about this. 
4. The costs for the collection or return of the products are at the expense of the customer.

# Right of cancellation
1. A consumer may cancel an online purchase during a cooling-off period of 14 days without giving any reason, provided that
· the product has not been used
· it is not a product that can spoil quickly, like food or flowers
· the product is not specially tailored for the consumer or adapted to its special needs
· it is not a product that may not be returned for hygienic reasons (underwear, swimwear, etc.)
· the seal is still intact, when the product is a data carrier with digital content (DVDs, CDs, etc.)
· the product is not a (holiday)trip, a transportation ticket, a catering order or a form of leisure activity,
· the product is not a separate magazine or a loose newspaper
· the purchase does not concern an (assignment to) urgent repair
· the consumer has not renounced his right of cancellation
2. The reflection period of 14 days as referred to in paragraph 1 commences:
o on the day after the consumer has received the last product or part of 1 order
o as soon as the consumer has received the first the product of a subscription
o as soon as the consumer has purchased a service for the first time
o as soon as the consumer has confirmed the purchase of digital content via the internet
3. The consumer can notify his right of cancellation via info@dakcoffeeroasters.com, if desired by using the withdrawal form that can be downloaded via the website of Dak Coffee Roasters, dakcoffeeroasters.com.
4. The consumer is obliged to return the product to Dak Coffee Roasters within 14 days after the notification of his right of cancellation, after which period his right of cancellation will lapse. 
5. The costs for return are due Dak Coffee Roasters if the complete order is returned.
6. If the purchase costs and any other costs (such as shipping and return costs) are eligible for reimbursement according to the law, Dak Coffee Roasters will refund these costs to the consumer within 14 days of receipt of the timely appeal to the right of withdrawal, provided that the consumer has returned the product to Dak Coffee Roasters in time.

# Suspension of obligations by the customer

The customer waives the right to suspend the fulfillment of any obligation arising from this agreement.

# Right of retention

1. Dak Coffee Roasters can appeal to his right of retention of title and in that case retain the products sold by Dak Coffee Roasters to the customer until the customer has paid all outstanding invoices with regard to Dak Coffee Roasters, unless the customer has provided sufficient security for these payments. 
2. The right of retention of title also applies on the basis of previous agreements from which the customer still owes payments to Dak Coffee Roasters.
3. Dak Coffee Roasters is never liable for any damage that the customer may suffer as a result of using his right of retention of title.

# Settlement

The customer waives his right to settle any debt to Dak Coffee Roasters with any claim on Dak Coffee Roasters.

# Retention of title

1. Dak Coffee Roasters remains the owner of all delivered products until the customer has fully complied with all its payment obligations with regard to Dak Coffee Roasters under whatever agreement with Dak Coffee Roasters including of claims regarding the shortcomings in the performance.
2. Until then, Dak Coffee Roasters can invoke its retention of title and take back the goods. 
3. Before the property is transferred to the customer, the customer may not pledge, sell, dispose of or otherwise encumber the products. 
4. If Dak Coffee Roasters invokes its retention of title, the agreement will be dissolved and Dak Coffee Roasters has the right to claim compensation, lost profits and interest.

# Delivery

1. Delivery takes place while stocks last.
2. Delivery takes place at Dak Coffee Roasters unless the parties have agreed upon otherwise.
3. Delivery of products ordered online takes place at the address indicated by the customer. 
4. If the agreed price is not paid on time, Dak Coffee Roasters has the right to suspend its obligations until the agreed price is fully paid. 
5. In the event of late payment, the customer is automatically in default, and hereby he can not object to late delivery by Dak Coffee Roasters.

# Delivery period

1. Any delivery period specified by Dak Coffee Roasters is indicative and does not give the customer the right to dissolution or compensation if this period is not met with, unless the parties have expressly agreed otherwise in writing.
2. The delivery starts once the customer has fully completed the (electronic) ordering process and received an (electronic) confirmation of his order from Dak Coffee Roasters. 
3. Exceeding the specified delivery period does not entitle the customer to compensation or the right to terminate the contract, unless Dak Coffee Roasters cannot deliver within [number of days late] or if the parties have agreed upon otherwise.
  
# Actual delivery

The customer must ensure that the actual delivery of the products ordered by him can take place in time.

# Transport costs

Transport costs are on behalf of the customer, unless the parties have agreed upon otherwise.

# Packaging and shipping

1. If the package of a delivered product is opened or damaged, the customer must have a note drawn up by the forwarder or delivery person before receiving the product. In the absence of which Dak Coffee Roasters may not be held liable for any damage.
2. If the customer himself takes care of the transport of a product, he must report any visible damage to products or the packaging prior to the transport to Dak Coffee Roasters, failing which Dak Coffee Roasters cannot be held liable for any damage.

# Insurance

# Storage

1. If the customer orders products later than the agreed delivery date, the risk of any quality loss is entirely for the customer.
2. Any extra costs as a result of premature or late purchase of products are entirely at the customer's expense.

# Guarantee

1. The warranty relating to products only applies to defects caused by faulty manufacture, construction or material. 
2. The warranty does not apply in the event of normal wear and tear and damage resulting from accidents, changes made to the product, negligence or improper use by the customer, or when the cause of the defect can not clearly be established.
3. The risk of loss, damage or theft of the products that are the subject of an agreement between the parties, will pass on to the customer when these products are legally and/or factually delivered, at least are in the power of the customer or of a third party who receives the product for the benefit of the customer.

# Exchange

1. Exchange is only possible if the following conditions are met:
· exchange takes place within 7 days after purchase upon presentation of the original invoice
· the product is returned in the original packaging or with the original (price) tags still attached to it 
· the product has not been used
2. Discounted items, non-shelf articles such as food, custom made items or specially adapted articles for the customer and coffee cannot be exchanged.
​
# Indemnity

The customer indemnifies Dak Coffee Roasters against all third-party claims that are related to the products and/or services supplied by Dak Coffee Roasters. 

# Complaints

1. The customer must examine a product or service provided by Dak Coffee Roasters as soon as possible for possible shortcomings.
2. If a delivered product or service does not comply with what the customer could reasonably expect from the agreement, the customer must inform Dak Coffee Roasters of this as soon as possible, but in any case within 1 month after the discovery of the shortcomings. 
3. Consumers must inform Dak Coffee Roasters of this within two months after detection of the shortcomings.
4. The customer gives a detailed description as possible of the shortcomings, so that Dak Coffee Roasters is able to respond adequately. 
5. The customer must demonstrate that the complaint relates to an agreement between the parties.
6. If a complaint relates to ongoing work, this can in any case not lead to Dak Coffee Roasters being forced to perform other work than has been agreed.

# Giving notice

1. The customer must provide any notice of default to Dak Coffee Roasters in writing.
2. It is the responsibility of the customer that a notice of default actually reaches Dak Coffee Roasters (in time).

# Joint and several Client liabilities

If Dak Coffee Roasters enters into an agreement with several customers, each of them shall be jointly and severally liable for the full amounts due to Dak Coffee Roasters under that agreement.

# Liability of Dak Coffee Roasters
1. Dak Coffee Roasters is only liable for any damage the customer suffers if and insofar as this damage is caused by intent or gross negligence.  
2. If Dak Coffee Roasters is liable for any damage, it is only liable for direct damages that results from or is related to the execution of an agreement.
3. Dak Coffee Roasters is never liable for indirect damages, such as consequential loss, lost profit, lost savings or damage to third parties.
4. If Dak Coffee Roasters is liable, its liability is limited to the amount paid by a closed (professional) liability insurance and in the absence of (full) payment by an insurance company of the damages the amount of the liability is limited to the (part of the) invoice to which the liability relates.
5. All images, photos, colors, drawings, descriptions on the website or in a catalog are only indicative and are only approximate and can not lead to any compensation and/or (partial) dissolution of the agreement and/or suspension of any obligation.

# Expiry period

Every right of the customer to compensation from Dak Coffee Roasters shall, in any case, expire within 12 months after the event from which the liability arises directly or indirectly. This does not exclude the provisions in article 6:89 of the Dutch Civil Code.

# Dissolution

1. The customer has the right to dissolve the agreement if Dak Coffee Roasters imputably fails in the fulfillment of his obligations, unless this shortcoming does not justify termination due to its special nature or because it is of minor significance. 
2. If the fulfillment of the obligations by Dak Coffee Roasters is not permanent or temporarily impossible, dissolution can only take place after Dak Coffee Roasters is in default. 
3. Dak Coffee Roasters has the right to dissolve the agreement with the customer, if the customer does not fully or timely fulfill his obligations under the agreement, or if circumstances give Dak Coffee Roasters good grounds to fear that the customer will not be able to fulfill his obligations properly.

# Force majeure

1. In addition to the provisions of article 6:75 Dutch Civil Code, a shortcoming of Dak Coffee Roasters in the fulfillment of any obligation to the customer cannot be attributed to Dak Coffee Roasters in any situation independent of the will of Dak Coffee Roasters, when the fulfillment of its obligations towards the customer is prevented in whole or in part or when the fulfillment of its obligations cannot reasonably be required from Dak Coffee Roasters . 
2. The force majeure situation referred to in paragraph 1 is also applicable - but not limited to: state of emergency (such as civil war, insurrection, riots, natural disasters, etc.); defaults and force majeure of suppliers, deliverymen or other third parties; unexpected disturbances of power, electricity, internet, computer or telecoms; computer viruses, strikes, government measures, unforeseen transport problems, bad weather conditions and work stoppages. 
3. If a situation of force majeure arises as a result of which Dak Coffee Roasters cannot fulfill one or more obligations towards the customer, these obligations will be suspended until Dak Coffee Roasters can comply with it. 
4. From the moment that a force majeure situation has lasted at least 30 calendar days, both parties may dissolve the agreement in writing in whole or in part. 
5. Dak Coffee Roasters does not owe any (damage) compensation in a situation of force majeure, even if it has obtained any advantages as a result of the force majeure situation.

# Modification of the agreement

If, after the conclusion of the agreement and before its implementation, it appears necessary to change or supplement its contents, the parties shall timely and in mutual consultation adjust the agreement accordingly.

# Changes in the general terms and conditions

1. Dak Coffee Roasters is entitled to amend or supplement these general terms and conditions. 
2. Changes of minor importance can be made at any time. 
3. Major changes in content will be discussed by Dak Coffee Roasters with the customer in advance as much as possible.
4. Consumers are entitled to cancel the agreement in the event of a substantial change to the general terms and conditions.

# Transfer of rights

1. The customer can not transfer its rights deferring from an agreement with Dak Coffee Roasters to third parties without the prior written consent of Dak Coffee Roasters . 
2. This provision applies as a clause with a property law effect as referred to in Section 3:83 (2) Dutch Civil Code.

# Consequences of nullity or annullability

1. If one or more provisions of these general terms and conditions prove null or annullable, this will not affect the other provisions of these terms and conditions. 
2. A provision that is null or annullable shall, in that case, be replaced by a provision that comes closest to what Dak Coffee Roasters had in mind when drafting the conditions on that issue.

# Applicable law and competent court

1. Dutch law is exclusively applicable to all agreements between the parties. 
2. The Dutch court in the district where Dak Coffee Roasters is established is exclusively competent in case of any disputes between parties, unless the law prescribes otherwise.


Drawn up on 01 augustus 2018.
`