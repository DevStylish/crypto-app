export interface CryptoCoin {
    total_volume:           string;
    fiat_volume:            string;
    fiat_volume_change:     string;
    fiat_volume_change_pct: string;
    num_exchanges:          string;
    top_currencies:         TopCurrency[];
    top_fiat_currencies:    TopCurrency[];
    top_exchanges:          TopExchange[];
}

export interface TopCurrency {
    currency:          string;
    name:              string;
    volume:            string;
    volume_change:     string;
    volume_change_pct: string;
}

export interface TopExchange {
    exchange:          string;
    volume:            string;
    volume_change:     string;
    volume_change_pct: string;
}
